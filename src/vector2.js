'use strict';

class Vector2 {
    constructor() {
        this.x = 0;
        this.y = 0;
        const pos = this._checkParams(arguments);
        this.x = pos.x;
        this.y = pos.y;
        this._corresponding = null;
        this._visited = false;
        this._isIntersection = false;
        this._isEntry = true;
        this._distance = 0;
        this.next = null;
        this.prev = null;
    }


    visit() {
        this._visited = true;
        if (this._corresponding !== null && !this._corresponding._visited) {
            this._corresponding.visit();
        }
    }

    floor(v = 1) {
        this.floorX(v);
        this.floorY(v);
        return this;
    }

    floorX(v = 1) {
        this.x = Math.floor(this.x * v) / v;
        return this;
    }

    floorY(v = 1) {
        this.y = Math.floor(this.y * v) / v;
        return this;
    }

    ceil(v = 1) {
        this.ceilX(v);
        this.ceilY(v);
        return this;
    }

    ceilX(v = 1) {
        this.x = Math.ceil(this.x * v) / v;
        return this;
    }

    ceilY(v = 1) {
        this.y = Math.ceil(this.y * v) / v;
        return this;
    }

    round(v = 1) {
        this.roundX(v);
        this.roundY(v);
        return this;
    }

    roundX(v = 1) {
        this.x = Math.round(this.x * v) / v;
        return this;
    }

    roundY(v = 1) {
        this.y = Math.round(this.y * c) / v;
        return this;
    }

    set() {
        const pos = this._checkParams(arguments);
        this.setX(pos.x);
        this.setY(pos.y);
        return this;
    }

    setX(v) {
        this.x = v;
        return this;
    }

    setY(v) {
        this.y = v;
        return this;
    }

    add() {
        const pos = this._checkParams(arguments);
        this.addX(pos.x);
        this.addY(pos.y);
        return this;
    }

    addX(v) {
        this.x += v;
        return this;
    }

    addY(v) {
        this.y += v;
        return this;
    }

    substract() {
        const pos = this._checkParams(arguments);
        this.substractX(pos.x);
        this.substractY(pos.y);
        return this;
    }

    substractX(v) {
        this.x -= v;
        return this;
    }

    substractY(v) {
        this.y -= v;
        return this;
    }

    multiply() {
        const pos = this._checkParams(arguments);
        this.multiplyX(pos.x);
        this.multiplyY(pos.y);
        return this;
    }

    multiplyX(v) {
        this.x *= v;
        return this;
    }

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

    
    static createIntersection(x, y, distance) {
        const v = new Vector2(x, y);
        v._distance = distance;
        v._isIntersection = true;
        v._isEntry = false;
        return v;
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
