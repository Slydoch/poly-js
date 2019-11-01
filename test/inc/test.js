'use strict';
const assert = require('assert');

class Test {
    constructor() {
        this.assert = assert;
    }
    run() {
        
    }

    random(min, max) {
        return Math.random() * (max - min) + min;
    }

    assertVector2(v1, v2) {
        v1 = v1.approximated;
        v2 = v2.approximated;
        this.assert.equal(v1.x, v2.x);
        this.assert.equal(v1.y, v2.y);
    }
}

module.exports = Test;
