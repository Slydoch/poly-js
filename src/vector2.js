'use strict';
/**
 * Vector2 Class
 * @property {float} x The x value of the vertice
 * @property {float} y The y value of the vertice
 */
class Vector2 {
    /**
     * @param {Vector2|float|null} p1 Vector2: copy, float: assign, null: 0
     * @param {float|null} p2 float: assign, null: 0
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
     */
    constructor() {
        this.x = 0;
        this.y = 0;
        const pos = this._checkParams(arguments);
        this.x = pos.x;
        this.y = pos.y;
        this.next = null;
        this.prev = null;
    }

    /**
     * Flooring the Vector2
     * @param {float} v=1 Precision
     * @returns Vector2
     */
    floor(v = 1) {
        this.floorX(v);
        this.floorY(v);
        return this;
    }

    /**
     * Flooring the x value of the Vector2
     * @param {float} [v=1] Precision
     * @returns Vector2
     */
    floorX(v = 1) {
        this.x = Math.floor(this.x * v) / v;
        return this;
    }

    /**
     * Flooring the y value of the Vector2
     * @param {float} [v=1] Precision
     * @returns Vector2
     */
    floorY(v = 1) {
        this.y = Math.floor(this.y * v) / v;
        return this;
    }


    /**
     * Ceiling the Vector2
     * @param {float} [v=1] Precision
     * @returns Vector2
     */
    ceil(v = 1) {
        this.ceilX(v);
        this.ceilY(v);
        return this;
    }

    /**
     * Ceiling the x value of the Vector2
     * @param {float} [v=1] Precision
     * @returns Vector2
     */
    ceilX(v = 1) {
        this.x = Math.ceil(this.x * v) / v;
        return this;
    }

    /**
     * Ceiling the y value of the Vector2
     * @param {float} [v=1] Precision
     * @returns Vector2
     */
    ceilY(v = 1) {
        this.y = Math.ceil(this.y * v) / v;
        return this;
    }

    /**
     * Rounding the Vector2
     * @param {float} [v=1] Precision
     * @returns Vector2
     */
    round(v = 1) {
        this.roundX(v);
        this.roundY(v);
        return this;
    }

    /**
     * Rounding the x value of the Vector2
     * @param {float} [v=1] Precision
     * @returns Vector2
     */
    roundX(v = 1) {
        this.x = Math.round(this.x * v) / v;
        return this;
    }

    /**
     * Rounding the y value of the Vector2
     * @param {float} [v=1] Precision
     * @returns Vector2
     */
    roundY(v = 1) {
        this.y = Math.round(this.y * c) / v;
        return this;
    }

    /**
     * Setting the value of the Vector2
     * @param {Vector2|float|null} p1 Vector2: copy, float: assign
     * @param {float|null} p2 float: assign, null: 0
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
     * @returns Vector2
     */
    set() {
        const pos = this._checkParams(arguments);
        this.setX(pos.x);
        this.setY(pos.y);
        return this;
    }

    /**
     * Setting the x value of the Vector2
     * @param {float} v The value
     * @returns Vector2
     */
    setX(v) {
        this.x = v;
        return this;
    }

    /**
     * Setting the y value of the Vector2
     * @param {float} v The value
     * @returns Vector2
     */
    setY(v) {
        this.y = v;
        return this;
    }

    /**
     * Adding values to the the Vector2
     * @param {Vector2|float|null} p1 Vector2: copy, float: assign
     * @param {float|null} p2 float: assign, null: 0
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
     * @returns Vector2
     */
    add() {
        const pos = this._checkParams(arguments);
        this.addX(pos.x);
        this.addY(pos.y);
        return this;
    }

    /**
     * Adding v to x value of the Vector2
     * @param {float} v The value
     * @returns Vector2
     */
    addX(v) {
        this.x += v;
        return this;
    }


    /**
     * Adding v to y value of the Vector2
     * @param {float} v The value
     * @returns Vector2
     */
    addY(v) {
        this.y += v;
        return this;
    }


    /**
     * Substracting values to the the Vector2
     * @param {Vector2|float|null} p1 Vector2: copy, float: assign
     * @param {float|null} p2 float: assign, null: 0
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
     * @returns Vector2
     */
    substract() {
        const pos = this._checkParams(arguments);
        this.substractX(pos.x);
        this.substractY(pos.y);
        return this;
    }

    /**
     * Substracting v to x value of the Vector2
     * @param {float} v The value
     * @returns Vector2
     */
    substractX(v) {
        this.x -= v;
        return this;
    }

    /**
     * Substracting v to x value of the Vector2
     * @param {float} v The value
     * @returns Vector2
     */
    substractY(v) {
        this.y -= v;
        return this;
    }



    /**
     * Multiply values to the the Vector2
     * @param {Vector2|float|null} p1 Vector2: copy, float: assign
     * @param {float|null} p2 float: assign, null: 0
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
     * // Multiply  3 to v1 Vector2
     * v1.multiply({x:1, y:2});
     * // v1 values are now x:2 & y:6
     * @example
     * const v1 = new Vector2(2, 3);
     * const v2 = new Vector2(4, 1);
     * // Multiply 3 to v1 Vector2
     * v1.multiply(v2);
     * // v1 values are now x:8 & y:3, v2 is unchanged
     * @returns Vector2
     */
    multiply() {
        const pos = this._checkParams(arguments);
        this.multiplyX(pos.x);
        this.multiplyY(pos.y);
        return this;
    }

    /**
     * Multiply x value of the Vector2 by v
     * @param {float} v The multiplicator
     * @returns Vector2
     */
    multiplyX(v) {
        this.x *= v;
        return this;
    }


    /**
     * Multiply y value of the Vector2 by v
     * @param {float} v The multiplicator
     * @returns Vector2
     */
    multiplyY(v) {
        this.y *= v;
        return this;
    }

    divide() {
        const pos = this._checkParams(arguments);
        this.divideX(pos.x);
        this.divideY(pos.y);
        return this;
    }

    divideX(v) {
        this.x /= v;
        return this;
    }

    divideY(v) {
        this.y /= v;
        return this;
    }

    invert() {
        this.invertX();
        this.invertY();
        return this;
    }

    invertX() {
        this.x = 0 - this.x;
        return this;
    }

    invertY() {
        this.y = 0 - this.y;
        return this;
    }

    rotate(angle) {
        angle = angle * (Math.PI / 180);
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const x = this.x * 1;
        const y = this.y * 1;
        this.x = (x * cos - y * sin);
        this.y = (x * sin + y * cos);
        this.approximate();
        return this;
    }


    equals() {
        const pos = this._checkParams(arguments);
        return this.equalsX(pos.x) && this.equalsY(pos.y);
    }

    equalsX(v) {
        return this.x === v;
    }

    equalsY(v) {
        return this.y === v;
    }

    isInside(polygon) {
        return polygon.pointIsInside(this);
    }
    approximate() {
        this.setX(Math.round(this.x * 10000) / 10000).setY(Math.round(this.y * 10000) / 10000);
        return this;
    }
    get approximated() {
        return this.clone.approximate();
    }
    get normalized() {
        return this.divide(this.magnitude);
    }
    get norm() {
        return this.normalized;
    }
    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    get clone() {
        return new Vector2(this.x, this.y);
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

    static Distance(v1, v2) {
        const dx = Math.abs(v1.x - v2.x);
        const dy = Math.abs(v1.y - v2.y);
        return Math.sqrt(dx * dx + dy * dy);
    }

    static Max(v1, v2) {
        return new Vector2(Math.max(v1.x, v2.x), Math.max(v1.y, v2.y));
    }

    static Min(v1, v2) {
        return new Vector2(Math.min(v1.x, v2.x), Math.min(v1.y, v2.y));
    }

    static Lerp(v1, v2, t) {
        if (t > 1) t = 1;
        if (t < 0) t = 0;
        return Vector2.LerpUnclamped(v1, v2, t);
    }

    static LerpUnclamped(v1, v2, t) {
        const diffV = v2.clone.substract(v1).multiply(t);
        return v1.clone.add(diffV);
    }


    toString() {
        return `{x: ${this.x}, y: ${this.y}}`;
    }
}

Vector2.zero = new Vector2(0, 0);
Vector2.top = new Vector2(0, -1);
Vector2.left = new Vector2(-1, 0);
Vector2.bottom = new Vector2(0, 1);
Vector2.right = new Vector2(1, 0);
module.exports = Vector2;
