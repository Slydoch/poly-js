var Vector2Test = require('./inc/vector2');
var LineTest = require('./inc/line');
var PolygonTest = require('./inc/polygon');

const tests = [
    new Vector2Test(),
    new LineTest(),
    new PolygonTest()
];

for (const test of tests) {
    test.run();
}
