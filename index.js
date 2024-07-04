let displayValue = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
}

function calculate() {
    const operators = ['+', '-', '*', '/'];
    for (let operator of operators) {
        if (displayValue.includes(operator)) {
            currentOperator = operator;
            const operands = displayValue.split(operator);
            firstOperand = parseFloat(operands[0]);
            secondOperand = parseFloat(operands[1]);
            break;
        }
    }

    let result = 0;
    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            result = parseFloat(displayValue);
            break;
    }

    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
}
