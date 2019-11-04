'use strict';

const Polygon = require('./polygon');
const Vector2 = require('./vector2');

class Circle extends Polygon {
    constructor(center, radius, sides) {
        super();
        this.center = center;
        this.radius = Math.abs(radius);
        this.sides = sides;
        if(this.sides < 3) this.sides = 3;
        if(this.radius <= 0) this.radius = 1;
        this.calc();
    }

    calc() {
        this.first = null;
        for(let i = 0; i < this.sides; i++) {
            this.addVertex(new Vector2(0, this.radius).rotate(i / this.sides * 360).add(this.center));
        }
    }
}

module.exports = Circle;