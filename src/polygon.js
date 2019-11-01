'use strict';

const Vector2 = require('./vector2');
const Line = require('./line');

class Polygon {
    constructor(vertices = []) {
        this.vertices = 0;
        this.children = [];
        this.first = null;
        this._lastUnprocessed = null;
        for (let i = 0, len = vertices.length; i < len; i++) {
            this.addVertex(vertices[i]);
        }
    }

    pointIsInside(point) {
        let oddNodes = false;
        let vertex = this.first;
        let next = vertex.next;
        const x = point.x;
        const y = point.y;

        do {
            if ((vertex.y < y && next.y >= y ||
                    next.y < y && vertex.y >= y) &&
                (vertex.x <= x || next.x <= x)) {
                oddNodes ^= (vertex.x + (y - vertex.y) /
                    (next.y - vertex.y) * (next.x - vertex.x) < x);
            }

            vertex = vertex.next;
            next = vertex.next || this.first;
        } while (!vertex.equals(this.first));

        return oddNodes;
    }


    isLeft(P0, P1, P2) {
        return ((P1.x - P0.x) * (P2.y - P0.y) -
            (P2.x - P0.x) * (P1.y - P0.y));
    }

    setChildren(polygons) {
        this.children = polygons;
        return this;
    }

    addChild(polygon) {
        this.children.push(polygon);
        return this;
    }

    addVertex(vertex) {
        if (this.first === null) {
            this.first = vertex;
            this.first.next = vertex;
            this.first.prev = vertex;
        } else {
            const next = this.first;
            const prev = next.prev;

            next.prev = vertex;
            vertex.next = next;
            vertex.prev = prev;
            prev.next = vertex;
        }
        this.vertices++;
    }

    insertVertex(vertex, start, end) {
        let prev, curr = start;

        while (!curr.equals(end) && curr._distance < vertex._distance) {
            curr = curr.next;
        }

        vertex.next = curr;
        prev = curr.prev;

        vertex.prev = prev;
        prev.next = vertex;
        curr.prev = vertex;

        this.vertices++;
    }

    getNext(v) {
        let c = v;
        while (c._isIntersection) c = c.next;
        return c;
    }

    get firstIntersect() {
        let v = this._firstIntersect || this.first;

        do {
            if (v._isIntersection && !v._visited) break;

            v = v.next;
        } while (!v.equals(this.first));

        this._firstIntersect = v;
        return v;
    }


    get hasUnprocessed() {
        let v = this._lastUnprocessed || this.first;
        do {
            if (v._isIntersection && !v._visited) {
                this._lastUnprocessed = v;
                return true;
            }

            v = v.next;
        } while (!v.equals(this.first));

        this._lastUnprocessed = null;
        return false;
    }

    get points() {
        const points = [];
        let v = this.first;

        do {
            points.push(v);
            v = v.next;
        } while (!v.equals(this.first));
        return points;
    }


    /** GETTERS */
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


    get area() {
        let total = 0;
        let v = this.first;
        do {
            total += v.x * v.next.y - v.y * v.next.x;
            v = v.next;
        } while (!v.equals(this.first));

        let area = total / 2;
        if (this.children && this.children.length) {
            for (const child of this.children) {
                area -= child.area;
            }
        }
        return area;
    }
}

module.exports = Polygon;
