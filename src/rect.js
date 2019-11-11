'use strict';

const Vector2 = require('./vector2');
const Polygon = require('./polygon');

class Rect extends Polygon {
    constructor() {
        super();
        this._position = Vector2.zero;
        this._size = Vector2.zero;
        this._checkParams(arguments);
    }

    pointIsInsideRect(point) {
        const ps = this._position;
        const pe = this._position.clone.add(this._size);
        const pmin = new Vector2(
            Math.min(ps.x, pe.x),
            Math.min(ps.y, pe.y)
        );
        const pmax = new Vector2(
            Math.max(ps.x, pe.x),
            Math.max(ps.y, pe.y)
        );
        if(
            point.x >= pmin.x
            && point.x <= pmax.x
            && point.y >= pmin.y
            && point.y <= pmax.y
        ) {
            return true;
        }
        return false;
    }

    get position() {
        return this._position;
    }
    get size() {
        return this._size;
    }
    set position(value) {
        this._position = value;
        this._calcPoly();
    }
    set size(value) {
        this._size = value;
        this._calcPoly();
    }

    _checkParams(args) {
        const p1 = args[0];
        const p2 = args[1];
        const p3 = args[2];
        const p4 = args[3];
        if (
            p1 && typeof p1 === 'object' && p1 instanceof Vector2 &&
            p2 && typeof p2 === 'object' && p2 instanceof Vector2
        ) { // (Vector2 position, Vector2 size)
            this._position = p1;
            this._size = p2;
        } else if (
            p1 && typeof p1 !== 'undefined' && typeof p1 !== 'object' &&
            p2 && typeof p2 !== 'undefined' && typeof p2 !== 'object' &&
            p3 && typeof p3 !== 'undefined' && typeof p3 !== 'object' &&
            p4 && typeof p4 !== 'undefined' && typeof p4 !== 'object'
        ) { // (Vector2 position, Vector2 size)
            this._position.x = p1;
            this._position.y = p2;
            this._size.x = p3;
            this._size.y = p4;
        }
        this._calcPoly();
    }

    _calcPoly() {
        this.setVertexes([
            this._position,
            this._position.clone.add(new Vector2(this._size.x, 0)),
            this._position.clone.add(this._size),
            this._position.clone.add(new Vector2(0, this._size.y))
        ]);
    }

    static Box(p) {
        if (p && typeof p === 'object') {
            if (p instanceof Polygon) {
                p = p.points;
            }
            if (p instanceof Array && p.length) {
                const xs = p.map(_ => _.x);
                const ys = p.map(_ => _.y);
                const position = new Vector2(Math.min(...xs), Math.min(...ys));
                const size = new Vector2(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
                return new Rect(position, size);
            }
        }
        return null;
    }
}
module.exports = Rect;
