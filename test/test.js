const Vector2Test = require('./inc/vector2');
const LineTest = require('./inc/line');
const PolygonTest = require('./inc/polygon');
const CurveTest = require('./inc/curve');

const tests = [
	new Vector2Test(),
	new LineTest(),
	new PolygonTest(),
	new CurveTest()
];

for (const test of tests) {
	test.run();
}
