'use strict';

const PolyBool = require('polybooljs');

const Line = require('./line');
const Vector2 = require('./vector2');
/**
 * Polygon Class
 * @property {Vector2} first The first point of the polygon, follow next on first to iterate
 */
class Polygon {
	/**
	 * Create a new Polygon
	 * @param {Vector2[]} [vertices] Vertices of the polygon
	 */
	constructor(vertices = []) {
		this.children = [];
		this.first = null;
		if (vertices && vertices.length) {
			for (const vertice of vertices) {
				this.addVertex(vertice);
			}
		}
	}

	/**
	 * Wrapper for checking if point is inside a polygon
	 * @param {Vector2} point Point to check
	 * @returns {boolean}
	 */
	pointIsInside(point) {
		return this.pointIsInsidePolygon(point);
	}

	/**
	 * Checking if point is inside a polygon
	 * @param {Vector2} point Point to check
	 * @returns {boolean}
	 */
	pointIsInsidePolygon(point) {
		let oddNodes = false;
		let vertex = this.first;
		let next = vertex.next;
		const x = point.x;
		const y = point.y;
		do {
			if (
				(
					(vertex.y < y && next.y >= y) ||
					(next.y < y && vertex.y >= y)
				) &&
				(vertex.x <= x || next.x <= x)
			) {
				oddNodes ^= (vertex.x + ((y - vertex.y) /
					(next.y - vertex.y) * (next.x - vertex.x)) < x);
			}
			vertex = vertex.next;
			next = vertex.next || this.first;
		} while (!vertex.equals(this.first));
		return oddNodes;
	}

	/**
	 * Setting all children polygons (for holes)
	 * @param {Polygon[]} polygons Children to set
	 * @returns {Polygon}
	 */
	setChildren(polygons) {
		this.children = polygons;
		return this;
	}

	/**
	 * Adding a child polygon (for hole)
	 * @param {Polygon} polygon Child polygon to add
	 * @returns {Polygon}
	 */
	addChild(polygon) {
		this.children.push(polygon);
		return this;
	}

	/**
	 * Setting vertices of the polygon
	 * @param {Vector2[]} vertices Vertices to set
	 * @returns {Polygon}
	 */
	setVertexes(vertices) {
		this.first = null;
		for (const v of vertices) {
			this.addVertex(v);
		}
		return this;
	}


	/**
	 * Add a new vertices to the end
	 * @param {Vector2} vertice the vertice to add
	 * @returns {Polygon}
	 */
	addVertex(vertice) {
		if (this.first === null) {
			this.first = vertice;
			this.first.next = vertice;
			this.first.prev = vertice;
		} else {
			const next = this.first;
			const prev = next.prev;

			next.prev = vertice;
			vertice.next = next;
			vertice.prev = prev;
			prev.next = vertice;
		}
		return this;
	}

	/**
	 * Is the current polygon colliding with the given polygon
	 * @param {Polygon} polygon the second polygon for the collision
	 * @returns {Boolean}
	 */
	colliding(polygon) {
		return Polygon.Colliding(this, polygon);
	}

	/**
	 * Intersect boolean operation on this polygon with the given polygon
	 * @param {Polygon} polygon the second polygon for the operation
	 * @returns {Polygon[]}
	 */
	intersect(polygon) {
		return Polygon.Intersect(this, polygon);
	}

	/**
	 * Difference boolean operation on this polygon with the given polygon
	 * @param {Polygon} polygon the second polygon for the operation
	 * @returns {Polygon[]}
	 */
	difference(p) {
		return Polygon.Difference(this, p);
	}

	/**
	 * Union boolean operation on this polygon with the given polygon
	 * @param {Polygon} polygon the second polygon for the operation
	 * @returns {Polygon[]}
	 */
	union(p) {
		return Polygon.Union(this, p);
	}

	/**
	 * Xor boolean operation on this polygon with the given polygon
	 * @param {Polygon} polygon the second polygon for the operation
	 * @returns {Polygon[]}
	 */
	xor(p) {
		return Polygon.Xor(this, p);
	}


	/* GETTERS */
	/**
	 * Get region for polybooljs plugin, can be also be used for GeoJson.
	 * Return a double level array ([[x, y], [x, y], ...])
	 * @type {Array[]}
	 * @readonly
	 */
	get region() {
		return this.points.map((p) => {
			return [p.x, p.y];
		});
	}

	/**
	 * Get points of the Polygon
	 * @type {Vector2[]}
	 * @readonly
	 */
	get points() {
		const points = [];
		let v = this.first;

		do {
			points.push(v);
			v = v.next;
		} while (!v.equals(this.first));
		return points;
	}

	/**
	 * Get lines of the Polygon
	 * @type {Line[]}
	 * @readonly
	 */
	get lines() {
		const lines = [];
		let prev = null;
		let cur = this.first;
		do {
			if (prev !== null) {
				lines.push(new Line(prev, cur));
			}
			prev = cur;
			cur = cur.next;
		} while (!cur.equals(this.first));
		return lines;
	}

	/**
	 * Get area of the Polygon
	 * @type {Number}
	 * @readonly
	 */
	get area() {
		let total = 0;
		let v = this.first;
		do {
			total += (v.x * v.next.y) - (v.y * v.next.x);
			v = v.next;
		} while (!v.equals(this.first));

		let area = total / 2;
		if (this.children && this.children.length) {
			for (const child of this.children) {
				area -= child.area;
			}
		}
		return Math.abs(area);
	}

	/**
	 * Is the p1 polygon colliding with the p2 polygon
	 * @param {Polygon} p1 the first polygon for the collision
	 * @param {Polygon} p2 the second polygon for the collision
	 * @returns {Boolean}
	 */
	static Colliding(p1, p2) {
		const p1Points = p1.points;
		const p2Points = p2.points;
		for (const pt1 of p1Points) {
			if (p2.pointIsInside(pt1)) {
				return true;
			}
		}
		for (const pt2 of p2Points) {
			if (p1.pointIsInside(pt2)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Convert region to polygon
	 * @param {Array[]} region the region to convert
	 * @returns {Polygon}
	 */
	static FromRegion(region) {
		return new Polygon(region.map((p) => {
			return new Vector2(p[0], p[1]);
		}));
	}


	/**
	 * Intersect boolean operation on the p1 polygon with the p2 polygon
	 * @param {Polygon} polygon the first polygon for the operation
	 * @param {Polygon} polygon the second polygon for the operation
	 * @returns {Polygon[]}
	 */
	static Intersect(p1, p2) {
		const operation = PolyBool.intersect({
			regions: [
				p1.region
			],
			inverted: false
		}, {
			regions: [
				p2.region
			],
			inverted: false
		});
		return operation.regions.map((r) => {
			return Polygon.FromRegion(r);
		});
	}


	/**
	 * Union boolean operation on the p1 polygon with the p2 polygon
	 * @param {Polygon} polygon the first polygon for the operation
	 * @param {Polygon} polygon the second polygon for the operation
	 * @returns {Polygon[]}
	 */
	static Union(p1, p2) {
		const operation = PolyBool.union({
			regions: [
				p1.region
			],
			inverted: false
		}, {
			regions: [
				p2.region
			],
			inverted: false
		});
		return operation.regions.map((r) => {
			return Polygon.FromRegion(r);
		});
	}


	/**
	 * Difference boolean operation on the p1 polygon with the p2 polygon
	 * @param {Polygon} polygon the first polygon for the operation
	 * @param {Polygon} polygon the second polygon for the operation
	 * @returns {Polygon[]}
	 */
	static Difference(p1, p2) {
		const operation = PolyBool.difference({
			regions: [
				p1.region
			],
			inverted: false
		}, {
			regions: [
				p2.region
			],
			inverted: false
		});
		return operation.regions.map((r) => {
			return Polygon.FromRegion(r);
		});
	}


	/**
	 * Xor boolean operation on the p1 polygon with the p2 polygon
	 * @param {Polygon} polygon the first polygon for the operation
	 * @param {Polygon} polygon the second polygon for the operation
	 * @returns {Polygon[]}
	 */
	static Xor(p1, p2) {
		const operation = PolyBool.xor({
			regions: [
				p1.region
			],
			inverted: false
		}, {
			regions: [
				p2.region
			],
			inverted: false
		});
		return operation.regions.map((r) => {
			return Polygon.FromRegion(r);
		});
	}
}

module.exports = Polygon;
