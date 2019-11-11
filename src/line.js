'use strict';

const Vector2 = require('./vector2');

/**
 * Line Class
 * @property {Vector2} start The start position of the line
 * @property {Vector2} end The end position of the line
 */
class Line {
	/**
	 * @param {Vector2|Object} [p1] Vector2 like object of the start position
	 * @param {Vector2|Object} [p2] Vector2 like object of the end position
	 */
	constructor(...args) {
		this.start = new Vector2.Zero();
		this.end = new Vector2.Zero();
		this._checkParams(args);
	}

	/**
	 * @readonly
	 * @type {Number}
	 */
	get length() {
		return Vector2.Distance(this.end, this.start);
	}

	/**
	 * Get the intersection of this line with an other one
	 * Return false if lines does not intersect
	 * @param {Line} line Second line
	 * @returns boolean|Vector2
	 */
	intersect(line) {
		return Line.Intersect(this, line);
	}

	/**
	 * Get the intersection of two lines
	 * Return false if lines does not intersect
	 * @param {Line} l1 First line
	 * @param {Line} l2 Second line
	 * @returns boolean|Vector2
	 */
	static Intersect(l1, l2) {
		const p0x = l1.start.x;
		const p0y = l1.start.y;
		const p1x = l1.end.x;
		const p1y = l1.end.y;
		const p2x = l2.start.x;
		const p2y = l2.start.y;
		const p3x = l2.end.x;
		const p3y = l2.end.y;
		const s1x = p1x - p0x;
		const s1y = p1y - p0y;
		const s2x = p3x - p2x;
		const s2y = p3y - p2y;

		const s = ((-s1y * (p0x - p2x)) + (s1x * (p0y - p2y))) / ((-s2x * s1y) + (s1x * s2y));
		const t = ((s2x * (p0y - p2y)) - (s2y * (p0x - p2x))) / ((-s2x * s1y) + (s1x * s2y));

		const p = new Vector2.Zero();
		if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
			p.x = p0x + (t * s1x);
			p.y = p0y + (t * s1y);
			return p;
		}
		return false;
	}

	_checkParams(args) {
		const p1 = Vector2.IsVector2Like(args[0]);
		const p2 = Vector2.IsVector2Like(args[1]);
		if (p1 && p2) {
			this.start = p1;
			this.end = p2;
		} else if (p1) {
			this.end = p1;
		}
	}
}

module.exports = Line;
