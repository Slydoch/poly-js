'use strict';

const Vector2 = require('./vector2');
/**
 * BezierCurve Class
 */
class BezierCurve {
	/**
     * Create a bezier curve
	 * @param {Vector2} first The first point of the curve
	 * @param {Vector2} last The last point of the curve
	 * @param {Vector2[]} [controllers] Controllers points of the curve
	 * @param {Number} [segmentsCount] Segment count for polygon conversion and drawing
	 */
	constructor(first, last, controllers = [], segmentsCount = 100) {
		this._first = first;
		this._last = last;
		this._controllers = controllers;
		this._segmentsCount = parseInt(segmentsCount) || 1;
		this._points = [];
		this._calc();
	}

	/**
	 * The first point of the curve
	 * @type {Vector2}
	 */
	get first() {
		return this._first;
	}

	/**
	 * The last point of the curve
	 * @type {Vector2}
	 */
	get last() {
		return this._last;
	}

	/**
	 * Controllers of the curve
	 * @type {Vector2[]}
	 */
	get controllers() {
		return this._controllers;
	}

	/**
	 * Segment count for the curve calc (for line display)
	 * @type {Number}
	 */
	get segmentsCount() {
		return this._segmentsCount;
	}

	/**
	 * Points along the curves, count depending on segmentsCount
	 * @type {Vector2[]}
	 */
	get points() {
		return this._points;
	}

	set first(value) {
		this._first = value;
		this._calc();
	}

	set last(value) {
		this._last = value;
		this._calc();
	}

	set controllers(value) {
		this._controllers = value;
		this._calc();
	}

	set segmentsCount(value) {
		this._segmentsCount = value;
		this._calc();
	}

	_calc() {
		this._points = [];
		let prevPt = null;
		for (let si = 0; si <= this.segmentsCount; si++) {
			const t = si / this.segmentsCount;
			let pts = [this.first, ...this.controllers, this.last];
			do {
				const tmpPts = [];
				let prev = null;
				for (const pt of pts) {
					if (prev) {
						tmpPts.push(Vector2.Lerp(prev, pt, t));
					}
					prev = pt;
				}
				pts = tmpPts;
			} while (pts.length > 1);
			const nextPt = pts.shift();
			if (nextPt) {
				if (prevPt) {
					nextPt.prev = prevPt;
					prevPt.next = nextPt;
				}
				this._points.push(nextPt);
				prevPt = nextPt;
			}
		}
	}

	get isCurve() {
		return true;
	}
}

module.exports = BezierCurve;
