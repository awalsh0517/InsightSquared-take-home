'use strict';

const assert = require('assert');
const Add = require('../../operator/add');

describe('basic addition test', function () {
    describe('add', function () {
        it('should add two positive numbers', function () {
            const operator = new Add();
            console.log('test');
            assert.equal(operator.performOperation(5, 6), 11);
        });
    });

});