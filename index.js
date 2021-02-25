const Calculator = require('./calculator');

let calc = new Calculator();

console.log(calc.doMath('add', '54', '6'));
console.log(calc.doMath('sub', '5', '5'));

console.log(calc.doMath('add', '0b121', '0x17'))
