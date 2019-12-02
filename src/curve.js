'use strict';

/**
 * Curve class, base of all curves
 * @abstract
 */
class Curve {
	constructor() {
		this._prev = null;
		this._next = null;
		this._points = [];
	}

	/**
	 * Get the next point
	 * @type {Vector2}
	 */
	get next() {
		return this.points[0];
	}

	/**
	 * Get the previous point
	 * @type {Vector2}
	 */
	get prev() {
		return this._prev;
	}

	/**
	 * Set the previous element
	 * @type {Vector2}
	 */
	set prev(value) {
		this._prev = value;
		this._calc();
	}

	/**
	 * Set the next element
	 * @type {Vector2}
	 */
	set next(value) {
		this._next = value;
		this._calc();
	}

	/**
	 * Points along the curves, count depending on segmentsCount
	 * @type {Vector2[]}
	 */
	get points() {
		return this._points;
	}

	/**
	 * Is a curve ? Use by the system to differenciate Vector2 over curve
	 * @type {Boolean}
	 * @readonly
	 */
	get isCurve() {
		return true;
	}
}

module.exports = Curve;
