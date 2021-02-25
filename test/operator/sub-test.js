'use strict'

const assert = require('assert');
const Sub = require('../../operator/sub');

describe('basic subtraction test', function () {
  describe('sub', function () {
    it('should subtract 2 positive numbers', function () {
      const operator = new Sub();
      console.log('test');
      assert.equal(operator.performOperation(5.5, 3), 3);
    });
  });
});
