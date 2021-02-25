const Binary = require('./binary');
const Decimal = require('./decimal');
const Hexadecimal = require('./hexadecimal')


class OperandFactory {

    constructor() {
        this.operands = [
            Binary,
            Decimal,
            Hexadecimal,
        ];
    }

    registerOperand(operand) {
        this.operands.push(operand);
    }

    getOperand(operand) {
        let validOperands = this.operands.filter(function (operandType) {
            return operandType.isValidOperand(operand);
        });
        if (validOperands.length === 0) {
            throw 'No valid operand found.'
        }
        if (validOperands.length > 1) {
            throw 'Multiple valid operands found.'
        }
        return new validOperands[0](operand);
    }
};

module.exports = OperandFactory;
