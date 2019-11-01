'use strict';

const Test = require('./test');
const Vector2 = require('../../src/vector2');
const Polygon = require('../../src/polygon');

class PolygonTest extends Test {
    constructor() {
        super();
    }
    run() {
        describe('Polygon', () => {
            this.testConstruction();
            this.testOperators();
        });
    }

    testOperators() {
        this.testPointInside();
        this.testArea();
    }




    testArea() {
        describe('#area', () => {
            it('Square area', () => {
                const p = new Polygon([
                    new Vector2(0,0),
                    new Vector2(100,0),
                    new Vector2(100,100),
                    new Vector2(0,100)
                ]);
                this.assert.equal(p.area, 100*100);
            });
            it('Complex polygon area', () => {
                const p = new Polygon([
                    new Vector2(0,0),
                    new Vector2(100,0),
                    new Vector2(100,50),
                    new Vector2(50,50),
                    new Vector2(50,100),
                    new Vector2(0,100)
                ]);
                this.assert.equal(p.area, 100 * 100 - (50 * 50));
            });
            it('triangle area', () => {
                const p = new Polygon([
                    new Vector2(0,0),
                    new Vector2(100,100),
                    new Vector2(0,100)
                ]);
                this.assert.equal(p.area, 100 * 100 / 2);
            });
            it('Square with child area', () => {
                const p = new Polygon([
                    new Vector2(0,0),
                    new Vector2(100,0),
                    new Vector2(100,100),
                    new Vector2(0,100)
                ]);
                const c1 = new Polygon([
                    new Vector2(0,0),
                    new Vector2(50,0),
                    new Vector2(50,50),
                    new Vector2(0,50)
                ]);
                p.addChild(c1);
                const c2 = new Polygon([
                    new Vector2(50,50),
                    new Vector2(100,50),
                    new Vector2(100,100),
                    new Vector2(50,100)
                ]);
                p.addChild(c2);
                this.assert.equal(p.area, 100 * 100 - (50 * 50) - (50 * 50));
            });
        });
    }

    testPointInside() {
        describe('#pointIsInside()', () => {
            it('Checking if a point is inside a square polygon', () => {
                const p = new Polygon([
                    new Vector2(0,0),
                    new Vector2(100,0),
                    new Vector2(100,100),
                    new Vector2(0,100)
                ]);
                this.assert.equal(p.pointIsInside(new Vector2(50, 50)), true);
            });
            it('Checking if a point is inside a complex polygon', () => {
                const p = new Polygon([
                    new Vector2(0,0),
                    new Vector2(100,0),
                    new Vector2(100,50),
                    new Vector2(50,50),
                    new Vector2(50,100),
                    new Vector2(0,100)
                ]);
                this.assert.equal(p.pointIsInside(new Vector2(25, 25)), true);
            });
            it('Checking if a point is outside a square polygon', () => {
                const p = new Polygon([
                    new Vector2(20,20),
                    new Vector2(80,20),
                    new Vector2(80,80),
                    new Vector2(20,80)
                ]);
                this.assert.equal(p.pointIsInside(new Vector2(10, 10)), false);
            });
            it('Checking if a point is outside a complex polygon', () => {
                const p = new Polygon([
                    new Vector2(0,0),
                    new Vector2(100,0),
                    new Vector2(100,50),
                    new Vector2(50,50),
                    new Vector2(50,100),
                    new Vector2(0,100)
                ]);
                this.assert.equal(p.pointIsInside(new Vector2(75, 75)), false);
            });
        });
    }

    testConstruction() {
        describe('#constructor()', () => {
            it('Checking points are presents after construction', () => {
                let p;
                p = new Polygon([
                    new Vector2(0,0),
                    new Vector2(100,0),
                    new Vector2(100,100),
                    new Vector2(0,100)
                ]);
                this.assert.equal(p.points.length, 4);
            });
        });
    }


}

module.exports = PolygonTest;
