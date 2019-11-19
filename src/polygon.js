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
	 * @param {Array<Vector2|BezierCurve>} [elements] Vertices, Curves of the polygon
	 */
	constructor(elements = []) {
		this.children = [];
		this.first = null;
		if (elements && elements.length) {
			for (const element of elements) {
				this.addElement(element);
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
		if (vertex.isCurve) {
			vertex = vertex.next;
		}
		let next = vertex.next;
		if (next.isCurve) {
			next = next.next;
		}
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
			if (vertex.isCurve) {
				vertex = vertex.next;
			}
			next = vertex.next || this.first;
			if (next.isCurve) {
				next = next.next;
			}
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
	 * @deprecated
	 * @returns {Polygon}
	 */
	setVertexes(vertices) {
		return this.setElements(vertices);
	}

	/**
	 * Setting elements of the polygon
	 * @param {Array<Vector2|BezierCurve>} vertices Vertices to set
	 * @returns {Polygon}
	 */
	setElements(elements) {
		this.first = null;
		for (const v of elements) {
			this.addElement(v);
		}
		return this;
	}


	/**
	 * Add a new vertices to the end
	 * @param {Vector2} vertice the vertice to add
	 * @deprecated
	 * @returns {Polygon}
	 */
	addVertex(vertice) {
		return this.addElement(vertice);
	}


	/**
	 * Add a new vertices to the end
	 * @param {Vector2|BezierCurve} element the vertice or curve to add
	 * @returns {Polygon}
	 */
	addElement(element) {
		if (this.first === null) {
			this.first = element;
			this.first.next = element;
			this.first.prev = element;
		} else {
			const next = this.first;
			const prev = next.prev;

			next.prev = element;
			element.next = next;
			element.prev = prev;
			prev.next = element;
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

	/**
	 * Move all vertices of the polygon by a Vector2
	 * @param {Vector2} value The value to move by
	 * @returns {Vector2}
	 */
	moveBy(value) {
		let v = this.first;
		if (v.isCurve) {
			v = v.next;
		}
		if (v.isCurve) {
			v = v.next;
		}
		do {
			v.add(value);
			let next = v.next;
			if (next.isCurve) {
				next = next.next;
			}
			v = next;
		} while (!v.equals(this.first));
		return this;
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
		if (v.isCurve) {
			v = v.next;
		}
		do {
			let next = v.next;
			if (next.isCurve) {
				next = next.next;
			}
			points.push(v);
			v = next;
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
		if (cur.isCurve) {
			cur = cur.next;
		}
		do {
			let next = cur.next;
			if (next.isCurve) {
				next = next.next;
			}
			if (prev !== null) {
				lines.push(new Line(prev, cur));
			}
			prev = cur;
			cur = next;
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
		if (v.isCurve) {
			v = v.next;
		}
		do {
			let next = v.next;
			if (next.isCurve) {
				next = next.next;
			}
			total += (v.x * next.y) - (v.y * next.x);
			v = next;
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
	 * Did the polygon is convex
	 * @readonly
	 * @see isConcave
	 * @type {Boolean}
	 */
	get isConvex() {
		return !this.isConcave;
	}

	/**
	 * Did the polygon is concave
	 * @readonly
	 * @see isConvex
	 * @type {Boolean}
	 */
	get isConcave() {
		let v = this.first;
		if (v.isCurve) {
			v = v.next;
		}
		do {
			let next = v.next;
			if (next.isCurve) {
				next = next.next;
			}
			const line = new Line(v, next);
			if (this.pointIsInsidePolygon(line.alongPointUnclamped(1.01))) {
				return true;
			}
			v = next;
		} while (!v.equals(this.first));
		return false;
	}

	/**
	 * Convert the current polygon to a hull polygon (convert to convex)
	 * @readonly
	 * @type {Polygon}
	 */
	get hull() {
		if (this.isConvex) {
			return this;
		}
		let v = this.first;
		if (v.isCurve) {
			v = v.next;
		}
		do {
			let next = v.next;
			if (next.isCurve) {
				next = next.next;
			}
			const line = new Line(v, next);
			if (this.pointIsInsidePolygon(line.alongPointUnclamped(1.01))) {
				if (next.equals(this.first)) {
					this.first = next.next;
				}
				next = next.next;
			}
			v = next;
			if (v.isCurve) {
				v = next;
			}
		} while (!v.equals(this.first));
		return this;
	}

	/**
	 * Alias of hull
	 * @see {@link hull}
	 * @readonly
	 * @type {Polygon}
	 */
	get convex() {
		return this.hull;
	}

	/**
	 * Clonning the current polygon, usefull to not modify the current polygon
	 * @readonly
	 * @type {Polygon}
	 */
	get clone() {
		return new Polygon(this.points);
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
