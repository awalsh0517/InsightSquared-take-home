const Add = require('./add');
const Sub = require('./sub')

class OperatorFactory {
    constructor() {
        this.operatorMappings = {
            'add': new Add(),
            'sub': new Sub(),
        }
    }
    registerOperator(operator, operatorName) {
        this.operatorMappings[operatorName] = operator;
    }
    getOperatorFunction(operatorName) {
        return this.operatorMappings[operatorName];
    }
}

module.exports = OperatorFactory;
