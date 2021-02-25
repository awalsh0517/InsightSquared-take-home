const OperandFactory = require('./operand/operandFactory');
const OperatorFactory = require('./operator/operatorFactory');

class Calculator {
    constructor() {
        this.operandFactory = new OperandFactory();
        this.operatorFactory = new OperatorFactory();
    }

    registerOperator(operator, operatorName) {
        this.operatorFactory.registerOperator(operator, operatorName);
    }

    registerOperand(operand) {
        this.operandFactory.registerOperand(operand);
    }

    doMath(operator, leftOperand, rightOperand) {
        let op = this.operatorFactory.getOperatorFunction(operator);

        let leftOp = this.operandFactory.getOperand(leftOperand);
        let rightOp = this.operandFactory.getOperand(rightOperand);

        let leftVal = leftOp.convertToInt();
        let rightVal = rightOp.convertToInt();

        return op.performOperation(leftVal, rightVal);
    }
};

module.exports = Calculator;