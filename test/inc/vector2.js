'use strict';

const Test = require('./test');
const Vector2 = require('../../src/vector2');

class Vector2Test extends Test {
    constructor() {
        super();
    }
    run() {
        describe('Vector2', () => {
            this.testConstruction();
            this.testOperators();
        });
    }

    testOperators() {
        this.testMultiply();
        this.testDivide();
        this.testAdd();
        this.testSubstract();
        this.testRotate();
        this.testNormalized();
        this.testDistance();
        this.testLerp();
    }

    testLerp() {
        describe('#Lerp(v1, v2, t)', () => {
            const v1 = new Vector2(0, 0);
            const v2 = new Vector2(100, 100);
            it(`Lerp t=0.1`, () => {
                const l = Vector2.Lerp(v1, v2, 0.1);
                this.assertVector2(l, new Vector2(10, 10));
            });
            it(`Lerp t=0.5`, () => {
                const l = Vector2.Lerp(v1, v2, 0.5);
                this.assertVector2(l, new Vector2(50, 50));
            });
            it(`Lerp t=0.75`, () => {
                const l = Vector2.Lerp(v1, v2, 0.75);
                this.assertVector2(l, new Vector2(75, 75));
            });
            it(`Lerp t=-0.1`, () => {
                const l = Vector2.LerpUnclamped(v1, v2, -0.1);
                this.assertVector2(l, new Vector2(-10, -10));
            });
            it(`Lerp t=1.1`, () => {
                const l = Vector2.LerpUnclamped(v1, v2, 1.1);
                this.assertVector2(l, new Vector2(110, 110));
            });
        });
    }

    testDistance() {
        describe('#Distance(v1, v2)', () => {
            it(`Distance 0,0 => 42,42`, () => {
                const d = Vector2.Distance(new Vector2(42, 0), new Vector2(0, 42));
                this.assert.equal(d, Math.sqrt(42 * 42 + 42 * 42));
            });
        });
    }

    testNormalized() {
        describe('#normalized', () => {
            it(`normalized 0, 1`, () => {
                const v = new Vector2(42, 0).normalized;
                this.assert.equal(v.x, 1);
                this.assert.equal(v.y, 0);
            });
            it(`normalized 1, 0`, () => {
                const v = new Vector2(0, 42).normalized;
                this.assert.equal(v.x, 0);
                this.assert.equal(v.y, 1);
            });
            it(`normalized 1, 1`, () => {
                const v = new Vector2(42, 42).normalized;
                this.assert.equal(v.x, Math.sqrt(2) / 2);
                this.assert.equal(v.y, Math.sqrt(2) / 2);
            });
        });
    }

    testRotate() {
        describe('#rotate()', () => {
            const v = new Vector2(0, 42);
            it(`Rotate to 90`, () => {
                v.rotate(90);
                this.assert.equal(v.x, -42);
                this.assert.equal(v.y, 0);
            });
            it(`Rotate to 180`, () => {
                v.rotate(90);
                this.assert.equal(v.x, 0);
                this.assert.equal(v.y, -42);
            });
            it(`Rotate to 270`, () => {
                v.rotate(90);
                this.assert.equal(v.x, 42);
                this.assert.equal(v.y, 0);
            });
            it(`Rotate to 360`, () => {
                v.rotate(90);
                this.assert.equal(v.x, 0);
                this.assert.equal(v.y, 42);
            });
        });
    }

    testSubstract() {
        describe('#substract()', () => {
            const testCount = 5;
            let v1, v2;
            for(let i = 0; i < testCount; i++) {
                it(`Random substract test ${i+1}`, () => {
                    v1 = new Vector2({
                        x: this.random(-10, 10),
                        y: this.random(-10, 10)
                    });
                    v2 = new Vector2({
                        x: this.random(-10, 10),
                        y: this.random(-10, 10)
                    });
                    const result = new Vector2({
                        x: v1.x - v2.x,
                        y: v1.y - v2.y
                    });
                    v1.substract(v2);
                    this.assert.equal(result.x, v1.x);
                    this.assert.equal(result.y, v1.y);
                });
            }
        });
    }

    testAdd() {
        describe('#add()', () => {
            const testCount = 5;
            let v1, v2;
            for(let i = 0; i < testCount; i++) {
                it(`Random add test ${i+1}`, () => {
                    v1 = new Vector2({
                        x: this.random(-10, 10),
                        y: this.random(-10, 10)
                    });
                    v2 = new Vector2({
                        x: this.random(-10, 10),
                        y: this.random(-10, 10)
                    });
                    const result = new Vector2({
                        x: v1.x + v2.x,
                        y: v1.y + v2.y
                    });
                    v1.add(v2);
                    this.assert.equal(result.x, v1.x);
                    this.assert.equal(result.y, v1.y);
                });
            }
        });
    }

    testMultiply() {
        describe('#multiply()', () => {
            const testCount = 5;
            let v1, v2;
            for(let i = 0; i < testCount; i++) {
                it(`Random multiply test ${i+1}`, () => {
                    v1 = new Vector2({
                        x: this.random(-10, 10),
                        y: this.random(-10, 10)
                    });
                    v2 = new Vector2({
                        x: this.random(-10, 10),
                        y: this.random(-10, 10)
                    });
                    const result = new Vector2({
                        x: v1.x * v2.x,
                        y: v1.y * v2.y
                    });
                    v1.multiply(v2);
                    this.assert.equal(result.x, v1.x);
                    this.assert.equal(result.y, v1.y);
                });
            }
        });
    }

    testDivide() {
        describe('#divide()', () => {
            const testCount = 5;
            let v1, v2;
            for(let i = 0; i < testCount; i++) {
                it(`Random divide test ${i+1}`, () => {
                    v1 = new Vector2({
                        x: this.random(-10, 10),
                        y: this.random(-10, 10)
                    });
                    v2 = new Vector2({
                        x: this.random(-10, 10),
                        y: this.random(-10, 10)
                    });
                    const result = new Vector2({
                        x: v1.x / v2.x,
                        y: v1.y / v2.y
                    });
                    v1.divide(v2);
                    this.assert.equal(result.x, v1.x);
                    this.assert.equal(result.y, v1.y);
                });
            }
        });
    }

    testConstruction() {
        describe('#constructor()', () => {
            it('Empty constructor should work', () => {
                const v = new Vector2;
                this.assert.equal(v.x, 0);
                this.assert.equal(v.y, 0);
            });
            it('Constructor with one number should work', () => {
                const v = new Vector2(1);
                this.assert.equal(v.x, 1);
                this.assert.equal(v.y, 1);
            });
            it('Constructor with two numbers should work', () => {
                const v = new Vector2(2, 3);
                this.assert.equal(v.x, 2);
                this.assert.equal(v.y, 3);
            });
            it('Constructor with one Vector2 like object should work', () => {
                const v = new Vector2({
                    x: 4,
                    y: 5
                });
                this.assert.equal(v.x, 4);
                this.assert.equal(v.y, 5);
            });
            it('Constructor with one Vector2 like object and a number should ignore the number', () => {
                const v = new Vector2({
                    x: 6,
                    y: 7
                }, 1);
                this.assert.equal(v.x, 6);
                this.assert.equal(v.y, 7);
            });
        });
    }
}

module.exports = Vector2Test;
