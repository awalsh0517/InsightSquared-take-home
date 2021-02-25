class OperandBase {
    constructor(op) {
        this.operandInput = op
    }

    isValidOperand(opp) {
        return false;
    }

    convertToInt() {
        return null;
    }
};

module.exports = OperandBase;
