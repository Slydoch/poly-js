'use strict';

const Test = require('./test');
const Vector2 = require('../../src/vector2');
const Line = require('../../src/line');

class LineTest extends Test {
    constructor() {
        super();
    }
    run() {
        describe('Line', () => {
            this.testConstruction();
            this.testOperators();
        });
    }
    testOperators() {
        this.testIntersect();
    }



    testConstruction() {
        describe('#constructor()', () => {
            it('Empty constructor should work', () => {
                const l = new Line;
                this.assertVector2(l.start, Vector2.zero);
                this.assertVector2(l.end, Vector2.zero);
            });
            it('Constructor with on Vector2 should work', () => {
                const l = new Line(new Vector2(42, 42));
                this.assertVector2(l.start, Vector2.zero);
                this.assertVector2(l.end, new Vector2(42, 42));
            });
            it('Constructor with two Vector2 should work', () => {
                const l = new Line(new Vector2(42, 42), new Vector2(420, 420));
                this.assertVector2(l.start, new Vector2(42, 42));
                this.assertVector2(l.end, new Vector2(420, 420));
            });
        });
    }

    testIntersect() {
        describe('#intersect()', () => {
            it('straight intersect', () => {
                const l1 = new Line(new Vector2(50, 0), new Vector2(50, 100));
                const l2 = new Line(new Vector2(0, 50), new Vector2(100, 50));
                this.assertVector2(Line.Intersect(l1, l2), new Vector2(50, 50));
            });
            it('diagonal intersect', () => {
                const l1 = new Line(new Vector2(0, 0), new Vector2(100, 100));
                const l2 = new Line(new Vector2(0, 100), new Vector2(100, 0));
                this.assertVector2(Line.Intersect(l1, l2), new Vector2(50, 50));
            });
        });
    }

}

module.exports = LineTest;
