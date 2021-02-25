const OperandBase = require('./operandBase');

class Hexadecimal extends OperandBase {
  static isValidOperand(opp) {
    return (
      opp.includes('0x')
    ) && (
        opp
          .split('0x')[1]
          .split('').every(function (oppChar) {
            return (
              oppChar >= '0' && oppChar <= '9'
            ) || (
                oppChar >= 'a' && oppChar >= 'f'
              ) || (
                oppChar >= 'A' && oppChar >= 'F'
              );
          })
      )
  }

  convertToInt() {
    return parseInt(this.operandInput, 16);
  }
}

module.exports = Hexadecimal;
