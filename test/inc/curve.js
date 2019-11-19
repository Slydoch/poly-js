/* eslint-disable no-undef */
'use strict';

const Test = require('./test');
const Vector2 = require('../../src/vector2');
const Polygon = require('../../src/polygon');
const BezierCurve = require('../../src/bezierCurve');

class CurveTest extends Test {
	run() {
		describe('Curves', () => {
			this.testBezierCurve();
		});
	}

	testBezierCurve() {
		describe('#BezierCurve', () => {
			it('Construct a new bezierCurve with 1 controllers', () => {
				const curve = new BezierCurve(
					new Vector2(0, 0),
					new Vector2(100, 0),
					[
						new Vector2(50, 50)
					],
					100
				);
				this.assertVector2(curve.points[50], new Vector2(50, 25));
			});
			it('Construct a new bezierCurve with 2 controllers', () => {
				const curve = new BezierCurve(
					new Vector2(0, 0),
					new Vector2(100, 0),
					[
						new Vector2(0, 50),
						new Vector2(100, 50)
					],
					100
				);
				this.assertVector2(curve.points[50], new Vector2(50, 37.5));
			});
			it('Construct a polygon with a curve', () => {
				const polygon = new Polygon([
					new Vector2(0, 100),
					new BezierCurve(
						new Vector2(0, 0),
						new Vector2(100, 0),
						[
							new Vector2(0, 50),
							new Vector2(100, 50)
						],
						5
					),
					new Vector2(100, 100)
				]);
				this.assert.equal(polygon.points.length, 8);
				this.assert.equal(polygon.area, 7196.8);
			});
		});
	}
}

module.exports = CurveTest;
