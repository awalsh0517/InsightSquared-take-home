const OperatorBase = require('./operatorBase.js');

class Sub extends OperatorBase {
  performOperation(leftOperand, rightOperand) {
    return Math.round(leftOperand - rightOperand);
  }
};

module.exports = Sub;
