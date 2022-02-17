function getInputValue(number) {
    const inputId = document.getElementById(number + '-input');
    const inputString = inputId.value;
    return parseInt(inputString);
}
function checkInput(value1) {
    if (value1.indexOf('income') != -1) {
        debugger;
        return getInputValue(value1);
    }
    else {
        return parseInt(document.getElementById(value1).innerText);
    }
}
function subtraction(value1, value2, result) {
    const num1 = checkInput(value1);
    const num2 = document.getElementById(value2).innerText;
    document.getElementById(result).innerText = num1 - num2;
}
document.getElementById('calculate').addEventListener('click', function () {
    const food = getInputValue("food");
    const rent = getInputValue("rent");
    const cloth = getInputValue("cloth");
    document.getElementById('total-expenses').innerText = food + rent + cloth;
    subtraction('income', 'total-expenses', 'balance');
});

document.getElementById('save').addEventListener('click', function () {
    const parcentage = getInputValue("percentage");
    const income = getInputValue('income');
    document.getElementById('saving-amount').innerText = income * parcentage / 100;
    subtraction('balance', 'saving-amount', 'last-balance');
});