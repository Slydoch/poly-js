'use strict';

const Vector2 = require('./vector2');

class Line {
    constructor() {
        this.start = Vector2.Zero();
        this.end = Vector2.Zero();
        this._checkParams(arguments);
    }

    get length() {
        return Vector2.Distance(this.end, this.start);
    }

    intersect(line) {
        return Line.Intersect(this, line);
    }

    _checkParams(args) {
        const p1 = args[0];
        const p2 = args[1];
        if (p1 !== null && typeof p1 === 'object' && (p1 instanceof Vector2) && p2 !== null && typeof p2 === 'object' && (p2 instanceof Vector2)) {
            this.start = p1;
            this.end = p2;
        } else if (p1 !== null && typeof p1 === 'object' && (p1 instanceof Vector2)) {
            this.end = p1;
        }
    }


    static Intersect(l1, l2)
    {
        const p0_x = l1.start.x;
        const p0_y = l1.start.y;
        const p1_x = l1.end.x;
        const p1_y = l1.end.y;
        const p2_x = l2.start.x;
        const p2_y = l2.start.y;
        const p3_x = l2.end.x;
        const p3_y = l2.end.y;
        const s1_x = p1_x - p0_x;
        const s1_y = p1_y - p0_y;
        const s2_x = p3_x - p2_x;
        const s2_y = p3_y - p2_y;
    
        const s = (-s1_y * (p0_x - p2_x) + s1_x * (p0_y - p2_y)) / (-s2_x * s1_y + s1_x * s2_y);
        const t = ( s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) / (-s2_x * s1_y + s1_x * s2_y);
    
        const p = Vector2.Zero();
        if (s >= 0 && s <= 1 && t >= 0 && t <= 1)
        {
            p.x = p0_x + (t * s1_x);
            p.y = p0_y + (t * s1_y);
            return p;
        }
    
        return false;
    }
}

module.exports = Line;
