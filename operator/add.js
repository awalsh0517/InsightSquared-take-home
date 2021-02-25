const OperatorBase = require('./operatorBase.js');

class Add extends OperatorBase {
    performOperation(leftOperand, rightOperand) {
        return leftOperand + rightOperand;
    }
};

module.exports = Add;
