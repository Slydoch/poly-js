'use strict';
/**
 * Vector2 Class
 * @property {Number} x The x value of the vertice
 * @property {Number} y The y value of the vertice
 */
class Vector2 {
	/**
	 * @param {Vector2|Number} [p1] Vector2: copy, Number: assign
	 * @param {Number} [p2] Number: assign
	 * @example
	 * // returns Vector2 with x:0 & y:0
	 * new Vector2()
	 * @example
	 * // returns Vector2 with x:2 & y:2
	 * new Vector2(2)
	 * @example
	 * // returns Vector2 with x:4 & y:5
	 * new Vector2(4, 5)
	 * @example
	 * // returns Vector2 with x:1 & y:3
	 * new Vector2({x: 1, y: 3})
	 * @example
	 * // returns Vector2 with x:6 & y:7
	 * const v1 = new Vector2(6, 7);
	 * new Vector2(v1);
	 * @constructor
	 */
	constructor(...args) {
		this.x = 0;
		this.y = 0;
		const pos = this._checkParams(args);
		this.x = pos.x;
		this.y = pos.y;
		this.next = null;
		this.prev = null;
	}

	/**
	 * Flooring the Vector2
	 * @param {Number} v=1 Precision
	 * @returns {Vector2}
	 */
	floor(v = 1) {
		this.floorX(v);
		this.floorY(v);
		return this;
	}

	/**
	 * Flooring the x value of the Vector2
	 * @param {Number} [v=1] Precision
	 * @returns {Vector2}
	 */
	floorX(v = 1) {
		this.x = Math.floor(this.x * v) / v;
		return this;
	}

	/**
	 * Flooring the y value of the Vector2
	 * @param {Number} [v=1] Precision
	 * @returns {Vector2}
	 */
	floorY(v = 1) {
		this.y = Math.floor(this.y * v) / v;
		return this;
	}


	/**
	 * Ceiling the Vector2
	 * @param {Number} [v=1] Precision
	 * @returns {Vector2}
	 */
	ceil(v = 1) {
		this.ceilX(v);
		this.ceilY(v);
		return this;
	}

	/**
	 * Ceiling the x value of the Vector2
	 * @param {Number} [v=1] Precision
	 * @returns {Vector2}
	 */
	ceilX(v = 1) {
		this.x = Math.ceil(this.x * v) / v;
		return this;
	}

	/**
	 * Ceiling the y value of the Vector2
	 * @param {Number} [v=1] Precision
	 * @returns {Vector2}
	 */
	ceilY(v = 1) {
		this.y = Math.ceil(this.y * v) / v;
		return this;
	}

	/**
	 * Rounding the Vector2
	 * @param {Number} [v=1] Precision
	 * @returns {Vector2}
	 */
	round(v = 1) {
		this.roundX(v);
		this.roundY(v);
		return this;
	}

	/**
	 * Rounding the x value of the Vector2
	 * @param {Number} [v=1] Precision
	 * @returns {Vector2}
	 */
	roundX(v = 1) {
		this.x = Math.round(this.x * v) / v;
		return this;
	}

	/**
	 * Rounding the y value of the Vector2
	 * @param {Number} [v=1] Precision
	 * @returns {Vector2}
	 */
	roundY(v = 1) {
		this.y = Math.round(this.y * v) / v;
		return this;
	}

	/**
	 * Setting the value of the Vector2
	 * @param {Vector2|Number} [p1] Vector2: copy, Number: assign
	 * @param {Number} [p2] Number: assign
	 * @example
	 * const v1 = new Vector2();
	 * // change v1 Vector2 to x:3 & y:3
	 * v1.set(3);
	 * @example
	 * const v1 = new Vector2();
	 * // change v1 Vector2 to x:3 & y:4
	 * v1.set(3, 4);
	 * @example
	 * const v1 = new Vector2();
	 * // change v1 Vector2 to x:5 & y:6
	 * v1.set({x:5, y:6});
	 * @example
	 * const v1 = new Vector2();
	 * const v2 = new Vector2(7, 8);
	 * // change v1 Vector2 to x:7 & y:8
	 * v1.set(v2);
	 * @returns {Vector2}
	 */
	set(...args) {
		const pos = this._checkParams(args);
		this.setX(pos.x);
		this.setY(pos.y);
		return this;
	}

	/**
	 * Setting the x value of the Vector2
	 * @param {Number} v The value
	 * @returns {Vector2}
	 */
	setX(v) {
		this.x = v;
		return this;
	}

	/**
	 * Setting the y value of the Vector2
	 * @param {Number} v The value
	 * @returns {Vector2}
	 */
	setY(v) {
		this.y = v;
		return this;
	}

	/**
	 * Adding values to the the Vector2
	 * @param {Vector2|Number} [p1] Vector2: copy, Number: assign
	 * @param {Number} [p2] Number: assign
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * // add  3 to v1 Vector2
	 * v1.add(3);
	 * // v1 values are now x:5 & y:6
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * // add 5, 7 to v1 Vector2
	 * v1.add(5, 7);
	 * // v1 values are now x:7 & y:10
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * // add  3 to v1 Vector2
	 * v1.add({x:1, y:2});
	 * // v1 values are now x:3 & y:5
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * const v2 = new Vector2(4, 1);
	 * // add  3 to v1 Vector2
	 * v1.add(v2);
	 * // v1 values are now x:6 & y:4, v2 is unchanged
	 * @returns {Vector2}
	 */
	add(...args) {
		const pos = this._checkParams(args);
		this.addX(pos.x);
		this.addY(pos.y);
		return this;
	}

	/**
	 * Adding v to x value of the Vector2
	 * @param {Number} v The value
	 * @returns {Vector2}
	 */
	addX(v) {
		this.x += v;
		return this;
	}


	/**
	 * Adding v to y value of the Vector2
	 * @param {Number} v The value
	 * @returns {Vector2}
	 */
	addY(v) {
		this.y += v;
		return this;
	}


	/**
	 * Substracting values to the the Vector2
	 * @param {Vector2|Number} [p1] Vector2: copy, Number: assign
	 * @param {Number} [p2] Number: assign
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * // Substracting  3 to v1 Vector2
	 * v1.substract(3);
	 * // v1 values are now x:-1 & y:0
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * // Substracting 5, 7 to v1 Vector2
	 * v1.substract(5, 7);
	 * // v1 values are now x:-3 & y:-4
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * // Substracting  3 to v1 Vector2
	 * v1.substract({x:1, y:2});
	 * // v1 values are now x:1 & y:1
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * const v2 = new Vector2(4, 1);
	 * // Substracting 3 to v1 Vector2
	 * v1.substract(v2);
	 * // v1 values are now x:-2 & y:2, v2 is unchanged
	 * @returns {Vector2}
	 */
	substract(...args) {
		const pos = this._checkParams(args);
		this.substractX(pos.x);
		this.substractY(pos.y);
		return this;
	}

	/**
	 * Substracting v to x value of the Vector2
	 * @param {Number} v The value
	 * @returns {Vector2}
	 */
	substractX(v) {
		this.x -= v;
		return this;
	}

	/**
	 * Substracting v to x value of the Vector2
	 * @param {Number} v The value
	 * @returns {Vector2}
	 */
	substractY(v) {
		this.y -= v;
		return this;
	}

	/**
	 * Multiply values to the the Vector2
	 * @param {Vector2|Number} [p1] Vector2: copy, Number: assign
	 * @param {Number} [p2] Number: assign
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * // Multiply 3 to v1 Vector2
	 * v1.multiply(3);
	 * // v1 values are now x:6 & y:9
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * // Multiply 5, 7 to v1 Vector2
	 * v1.multiply(5, 7);
	 * // v1 values are now x:10 & y:21
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * // Multiply  1, 2 to v1 Vector2
	 * v1.multiply({x:1, y:2});
	 * // v1 values are now x:2 & y:6
	 * @example
	 * const v1 = new Vector2(2, 3);
	 * const v2 = new Vector2(4, 1);
	 * // Multiply v2 to v1 Vector2
	 * v1.multiply(v2);
	 * // v1 values are now x:8 & y:3, v2 is unchanged
	 * @returns {Vector2}
	 */
	multiply(...args) {
		const pos = this._checkParams(args);
		this.multiplyX(pos.x);
		this.multiplyY(pos.y);
		return this;
	}

	/**
	 * Multiply x value of the Vector2 by v
	 * @param {Number} v The multiplicator
	 * @returns {Vector2}
	 */
	multiplyX(v) {
		this.x *= v;
		return this;
	}


	/**
	 * Multiply y value of the Vector2 by v
	 * @param {Number} v The multiplicator
	 * @returns {Vector2}
	 */
	multiplyY(v) {
		this.y *= v;
		return this;
	}


	/**
	 * Dividing values to the the Vector2
	 * @param {Vector2|Number} p1 Vector2: copy, Number: assign
	 * @param {Number} p2 Number: assign
	 * @example
	 * const v1 = new Vector2(12, 9);
	 * // Dividing v1 Vector2 by 3
	 * v1.divide(3);
	 * // v1 values are now x:4 & y:3
	 * @example
	 * const v1 = new Vector2(10, 15);
	 * // Dividing v1 Vector2 by 2, 5
	 * v1.divide(2, 5);
	 * // v1 values are now x:5 & y:3
	 * @example
	 * const v1 = new Vector2(5, 8);
	 * // Dividing v1 Vector2 by 2, 4
	 * v1.divide({x:2, y:4});
	 * // v1 values are now x:2.5 & y:2
	 * @example
	 * const v1 = new Vector2(12, 10);
	 * const v2 = new Vector2(6, 2);
	 * // Dividing v1 Vector2 by 6, 2
	 * v1.divide(v2);
	 * // v1 values are now x:2 & y:5, v2 is unchanged
	 * @returns {Vector2}
	 */
	divide(...args) {
		const pos = this._checkParams(args);
		this.divideX(pos.x);
		this.divideY(pos.y);
		return this;
	}

	/**
	 * Divinding x value of the Vector2 by v
	 * @param {Number} v The divisor
	 * @returns {Vector2}
	 */
	divideX(v) {
		this.x /= v;
		return this;
	}

	/**
	 * Divinding x value of the Vector2 by v
	 * @param {Number} v The divisor
	 * @returns {Vector2}
	 */
	divideY(v) {
		this.y /= v;
		return this;
	}


	/**
	 * Inverting the Vector2
	 * @example
	 * const v1 = new Vector2(3, 6);
	 * v1.invert();
	 * // v1 values are now x:-3 & y:-6
	 * @returns {Vector2}
	 */
	invert() {
		this.invertX();
		this.invertY();
		return this;
	}

	/**
	 * Inverting the x value of the Vector2
	 * @example
	 * const v1 = new Vector2(3, 6);
	 * v1.invertX();
	 * // v1 values are now x:-3 & y:6
	 * @returns {Vector2}
	 */
	invertX() {
		this.x = 0 - this.x;
		return this;
	}

	/**
	 * Inverting the y value of the Vector2
	 * @example
	 * const v1 = new Vector2(3, 6);
	 * v1.invertY();
	 * // v1 values are now x:3 & y:-6
	 * @returns {Vector2}
	 */
	invertY() {
		this.y = 0 - this.y;
		return this;
	}


	/**
	 * Rotate the Vector2 arround zero by angle
	 * @param {Number} angle degrees angle
	 * @example
	 * const v1 = new Vector2(3, 6);
	 * v1.rotate(180);
	 * // v1 values are now x:-3 & y:-6
	 * @returns {Vector2}
	 */
	rotate(angle) {
		angle = angle * (Math.PI / 180);
		const cos = Math.cos(angle);
		const sin = Math.sin(angle);
		const x = this.x * 1;
		const y = this.y * 1;
		this.x = ((x * cos) - (y * sin));
		this.y = ((x * sin) + (y * cos));
		this.approximate();
		return this;
	}

	/**
	 * Test if the Vector2 is equal to an other
	 * @param {Vector2|Number} [p1] Vector2: copy, Number: assign
	 * @param {Number} [p2] Number: assign
	 * @example
	 * const v1 = new Vector2(3, 6);
	 * const v2 = new Vector2(4, 6);
	 * return v1.equals(v2); // false
	 * @returns {Boolean}
	 */
	equals(...args) {
		const pos = this._checkParams(args);
		return this.equalsX(pos.x) && this.equalsY(pos.y);
	}

	/**
	 * Test if the x value of the Vector2 is equal to an other
	 * @param {Number} v The value to compare
	 * @example
	 * const v1 = new Vector2(3, 6);
	 * const v2 = new Vector2(4, 6);
	 * return v1.equalsX(v2); // false
	 * @returns {Boolean}
	 */
	equalsX(v) {
		return this.x === v;
	}

	/**
	 * Test if the y value of the Vector2 is equal to an other
	 * @param {Number} v The value to compare
	 * @example
	 * const v1 = new Vector2(3, 6);
	 * const v2 = new Vector2(4, 6);
	 * return v1.equalsY(v2); // true
	 * @returns {Boolean}
	 */
	equalsY(v) {
		return this.y === v;
	}

	/**
	 * Test if the current Vector2 is inside a polygon
	 * @param {Polygon} polygon The polygon to check
	 * @example
	 * const polygon = new Polygon([
	 * 	new Vector2(0,0),
	 * 	new Vector2(10,0),
	 * 	new Vector2(10,10),
	 * 	new Vector2(0,10)
	 * ]);
	 * const v1 = new Vector2(5, 5);
	 * return v1.isInside(polygon); // true
	 * @returns {Boolean}
	 */
	isInside(polygon) {
		return polygon.pointIsInside(this);
	}

	/**
	 * @see {@link approximated}
	 * @example
	 * const v1 = new Vector2(Math.PI, Math.PI);
	 * console.log(v1.toString()); // {x: 3.141592653589793, y: 3.141592653589793}
	 * console.log(v1.approximate().toString()); // {x: 3.1416, y: 3.1416}
	 */
	approximate() {
		this.setX(Math.round(this.x * 10000) / 10000).setY(Math.round(this.y * 10000) / 10000);
		return this;
	}

	/**
	 * Approximated value of the Vector2 (used to remove duplicates)
	 * @see {@link approximate}
	 * @type {Vector2}
	 * @example
	 * const v1 = new Vector2(Math.PI, Math.PI);
	 * console.log(v1.toString()); // {x: 3.141592653589793, y: 3.141592653589793}
	 * console.log(v1.approximate.toString()); // {x: 3.1416, y: 3.1416}
	 */
	get approximated() {
		return this.clone.approximate();
	}

	/**
	 * Normalized Vector2
	 * @see {@link norm}
	 * @type {Vector2}
	 * @example
	 * const v1 = new Vector2(1, 1);
	 * console.log(v1.normalized.toString()); // {x: 0.7071067811865476, y: 0.7071067811865476}
	 */
	get normalized() {
		return this.divide(this.magnitude);
	}

	/**
	 * Alias of normalized
	 * @see {@link normalized}
	 * @type {Vector2}
	 */
	get norm() {
		return this.normalized;
	}

	/**
	 * Magnitude of the Vector2
	 * @type {Number}
	 * @example
	 * const v1 = new Vector2(12, 32);
	 * console.log(v1.magnitude); // 34.17601498127012
	 */
	get magnitude() {
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}

	/**
	 * A clone of the Vector2
	 * @type {Vector2}
	 * @example
	 * const v1 = new Vector2(5, 5);
	 * console.log(v1.clone.add(2, 3)); // {x: 7, y: 8}
	 * // v1 is unchanged
	 */
	get clone() {
		return new Vector2(this.x, this.y);
	}

	/**
	 * Getting JSON string version of the Vector2
	 * @returns {String}
	 */
	toString() {
		return JSON.stringify({
			x: this.x,
			y: this.y
		});
	}

	_checkParams(args) {
		const p1 = args[0];
		const p2 = args[1];
		const pos = {
			x: 0,
			y: 0
		};
		if (p1 !== null && typeof p1 === 'object') {
			if (typeof p1.x !== 'undefined' && typeof p1.y !== 'undefined') {
				pos.x = p1.x * 1;
				pos.y = p1.y * 1;
			}
		} else if (typeof p1 !== 'undefined' && typeof p2 !== 'undefined') {
			pos.x = p1 * 1;
			pos.y = p2 * 1;
		} else if (typeof p1 !== 'undefined') {
			pos.x = p1 * 1;
			pos.y = p1 * 1;
		}
		return pos;
	}

	/**
	 * Getting the distance between two Vector2
	 * @param {Vector2} v1 first Vector2
	 * @param {Vector2} v2 second Vector2
	 * @returns {Number}
	 */
	static Distance(v1, v2) {
		const dx = Math.abs(v1.x - v2.x);
		const dy = Math.abs(v1.y - v2.y);
		return Math.sqrt((dx * dx) + (dy * dy));
	}

	/**
	 * Getting the max values from two Vector2
	 * @param {Vector2} v1 first Vector2
	 * @param {Vector2} v2 second Vector2
	 * @returns {Vector2}
	 */
	static Max(v1, v2) {
		return new Vector2(Math.max(v1.x, v2.x), Math.max(v1.y, v2.y));
	}

	/**
	 * Getting the min values from two Vector2
	 * @param {Vector2} v1 first Vector2
	 * @param {Vector2} v2 second Vector2
	 * @returns {Vector2}
	 */
	static Min(v1, v2) {
		return new Vector2(Math.min(v1.x, v2.x), Math.min(v1.y, v2.y));
	}

	/**
	 * Getting a Lerp Vector2 from v1 to v2 with t time
	 * @param {Vector2} v1 first Vector2
	 * @param {Vector2} v2 second Vector2
	 * @param {Number} t time of lerp, value should be between 0 and 1
	 * @returns {Vector2}
	 */
	static Lerp(v1, v2, t) {
		if (t > 1) {
			t = 1;
		} else if (t < 0) {
			t = 0;
		}
		return Vector2.LerpUnclamped(v1, v2, t);
	}

	/**
	 * Getting a Lerp Vector2 from v1 to v2 with t time (Unclamped version)
	 * @param {Vector2} v1 first Vector2
	 * @param {Vector2} v2 second Vector2
	 * @param {Number} t time of lerp, value should be between 0 and 1, but it can exceed this values
	 * @returns {Vector2}
	 */
	static LerpUnclamped(v1, v2, t) {
		const diffV = v2.clone.substract(v1).multiply(t);
		return v1.clone.add(diffV);
	}

	/**
	 * Test if the passed element is a Vector2 like and return Vector2 corresponding, or false
	 * @param {any} subject The subject to test
	 * @returns {Vector2|false} false on failure
	 */
	static IsVector2Like(subject) {
		if (
			typeof subject === 'object' &&
			typeof subject.x !== 'undefined' &&
			typeof subject.y !== 'undefined'
		) {
			if (subject instanceof Vector2) {
				return subject;
			} else {
				return new Vector2(subject);
			}
		}
		return false;
	}
}

/**
 * A zero Vector2
 * @returns {Vector2}
 */
Vector2.Zero = function() {
	return new Vector2(0, 0);
};

/**
 * A top Vector2
 * @returns {Vector2}
 */
Vector2.Top = function() {
	return new Vector2(0, -1);
};

/**
 * A left Vector2
 * @returns {Vector2}
 */
Vector2.Left = function() {
	return new Vector2(-1, 0);
};

/**
 * A bottom Vector2
 * @returns {Vector2}
 */
Vector2.Bottom = function() {
	return new Vector2(0, 1);
};

/**
 * A right Vector2
 * @returns {Vector2}
 */
Vector2.Right = function() {
	return new Vector2(1, 0);
};

module.exports = Vector2;
