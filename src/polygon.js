'use strict';

const PolyBool = require('polybooljs');

const Line = require('./line');
const Vector2 = require('./vector2');

class Polygon {
    constructor(vertices = []) {
        this.vertices = 0;
        this.children = [];
        this.first = null;
        this._lastUnprocessed = null;
        this._firstIntersect = null;
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

    setChildren(polygons) {
        this.children = polygons;
        return this;
    }

    addChild(polygon) {
        this.children.push(polygon);
        return this;
    }
    
    setVertexes(vertices) {
        this.first = null;
        for(const v of vertices) {
            this.addVertex(v);
        }
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

    colliding(p) {
        return Polygon.Colliding(this, p);
    }

    intersect(p) {
        return Polygon.Intersect(this, p);
    }

    difference(p) {
        return Polygon.Difference(this, p);
    }

    union(p) {
        return Polygon.Union(this, p);
    }

    xor(p) {
        return Polygon.Xor(this, p);
    }



    /** GETTERS */

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

    get region() {
        return this.points.map((p) => {
            return [p.x, p.y];
        });
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
        return Math.abs(area);
    }

    static Colliding(p1, p2) {
        const p1Points = p1.points;
        const p2Points = p2.points;
        for(const pt1 of p1Points) {
            if(p2.pointIsInside(pt1)) {
                return true;
            }
        }
        for(const pt2 of p2Points) {
            if(p1.pointIsInside(pt2)) {
                return true;
            }
        }
        return false;
    }

    static FromRegion(region) {
        return new Polygon(region.map((p) => {
            return new Vector2(p[0], p[1]);
        }));
    }

    static Intersect(p1, p2) {
        const operation = PolyBool.intersect({
            regions: [
                p1.region
            ],
            inverted: false
        }, {
            regions:[
                p2.region
            ],
            inverted: false
        });
        return operation.regions.map((r) => {
            return Polygon.FromRegion(r);
        });
    }

    static Union(p1, p2) {
        const operation = PolyBool.union({
            regions: [
                p1.region
            ],
            inverted: false
        }, {
            regions:[
                p2.region
            ],
            inverted: false
        });
        return operation.regions.map((r) => {
            return Polygon.FromRegion(r);
        });
    }
    static Difference(p1, p2) {
        const operation = PolyBool.difference({
            regions: [
                p1.region
            ],
            inverted: false
        }, {
            regions:[
                p2.region
            ],
            inverted: false
        });
        return operation.regions.map((r) => {
            return Polygon.FromRegion(r);
        });
    }
    static Xor(p1, p2) {
        const operation = PolyBool.xor({
            regions: [
                p1.region
            ],
            inverted: false
        }, {
            regions:[
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
