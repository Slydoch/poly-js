'use strict';

const Polygon = require('./polygon');
const Vector2 = require('./vector2');

/**
 * Circle Class
 * @extends Polygon
 */
class Circle extends Polygon {
	/**
     * Create a circle polygon
     * @param {Vector2} center The center of the circle
     * @param {Number} radius The radius of the circle
     * @param {Number} sides Sides count of the polygon circle
     */
	constructor(center, radius, sides) {
		super();
		this._center = center;
		this._radius = Math.abs(radius);
		this._sides = parseInt(sides);
		if (this._sides < 3) {
			this._sides = 3;
		}
		if (this._radius <= 0) {
			this._radius = 1;
		}
		this._calc();
	}

	/**
	 * Wrapper for checking if point is inside a circle
	 * @param {Vector2} point Point to check
	 * @returns {boolean}
	 * @override
	 */
	pointIsInside(point) {
		return this.pointIsInsideCircle(point);
	}

	/**
     * Check if a point is inside a Circle
     * @param {Vector2} point The Vector2 like object
     * @returns {Boolean}
     */
	pointIsInsideCircle(point) {
		return (Vector2.Distance(this._center, point) <= this._radius);
	}

	/**
	 * Sides count of the circle
	 * @type {Number}
	 */
	get sides() {
		return this._sides;
	}

	set sides(value) {
		this._sides = parseInt(value);
		if (this._sides < 3) {
			this._sides = 3;
		}
		this._calc();
	}


	/**
	 * Center of the circle
	 * @type {Vector2}
	 */
	get center() {
		return this._center;
	}

	set center(value) {
		const diff = value.clone.substract(this._center);
		this._center = value;
		this.moveBy(diff);
	}

	/**
	 * Radius of the circle
	 * @type {Number}
	 */
	get radius() {
		return this._radius;
	}

	set radius(value) {
		this._radius = value;
		if (this._radius <= 0) {
			this._radius = 1;
		}
		this._calc();
	}

	_calc() {
		this.first = null;
		for (let i = 0; i < this._sides; i++) {
			this.addVertex(new Vector2(0, this._radius).rotate(i / this._sides * 360).add(this._center));
		}
	}
}

module.exports = Circle;
