const OperandBase = require('./operandBase');

class Binary extends OperandBase {
  static isValidOperand(opp) {
    return (
      opp.includes('0b')
    ) && (
        opp.split('0b')[1]
          .split('').every(function (oppChar) {
            return oppChar === '0' || oppChar === '1';
          })
      )
  }

  convertToInt() {
    return parseInt(this.operandInput.split('0b')[1], 2);
  }
}

module.exports = Binary;
