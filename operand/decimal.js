const OperandBase = require('./operandBase');

class Decimal extends OperandBase {
    static isValidOperand(opp) {
        return opp.split('').every(function (oppChar) {
            return oppChar >= '0' && oppChar <= '9';
        })
    }

    convertToInt() {
        return parseInt(this.operandInput);
    }
}

module.exports = Decimal;
