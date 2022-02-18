function getInputValue(number) {
    const inputId = document.getElementById(number + '-input');
    const inputString = inputId.value;
    return parseInt(inputString);
}
function checkInput(value1) {
    if (value1.indexOf('income') != -1) {
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

// calculate button 
document.getElementById('calculate').addEventListener('click', function () {
    const food = getInputValue("food");
    const rent = getInputValue("rent");
    const cloth = getInputValue("cloth");
    const income = getInputValue('income');
    if (isNaN(food) || isNaN(rent) || isNaN(cloth) || isNaN(income)) {
        document.getElementById('check-number').style.display = 'block';
    }
    else {
        if (food < 0 || rent < 0 || cloth < 0 || income < 0) {
            debugger;
            document.getElementById('check-positive').style.display = 'block';
        }
        else {
            const expense = document.getElementById('total-expenses').innerText = food + rent + cloth;
            if (expense > income) {
                document.getElementById('total-expenses').innerText = '00';
                document.getElementById('check-expense').style.display = 'block';
            }
            else {
                subtraction('income', 'total-expenses', 'balance');
                document.getElementById('check-number').style.display = 'none';
                document.getElementById('check-positive').style.display = 'none';
                document.getElementById('check-expense').style.display = 'none';
            }

        }

    }
});


// save button 
document.getElementById('save').addEventListener('click', function () {
    const parcentage = getInputValue("percentage");
    const income = getInputValue('income');
    const balance = document.getElementById('balance').innerText;
    if (isNaN(income) || isNaN(parcentage)) {
        document.getElementById('saving').style.display = 'block';
    }
    else {
        if (balance == '00') {
            document.getElementById('balance-first').style.display = 'block';
            document.getElementById('saving').style.display = 'none';
        }
        else {
            document.getElementById('saving').style.display = 'none';
            document.getElementById('balance-first').style.display = 'none';
            const saving = document.getElementById('saving-amount').innerText = income * parcentage / 100;
            if (saving > balance) {
                document.getElementById('saving-amount').innerText = '00'
                document.getElementById('last-balance').innerText = '00'
                document.getElementById('saving-check').style.display = 'block';
            }
            else {
                subtraction('balance', 'saving-amount', 'last-balance');
                document.getElementById('saving-check').style.display = 'none';
            }


        }

    }

});


// form inputfield color change 
function borderColorChange(tag) {
    if (!isNaN(tag.value) && tag.value >= 0 || tag.value == '') {
        tag.style.border = '1px solid ';
        tag.style.outline = '1px solid ';
    }
    else {

        tag.style.border = '1px solid red';
        tag.style.outline = '1px solid red';
    }
}

const formParent = document.getElementById('form');

formParent.addEventListener('focus', function (inputValue) {
    borderColorChange(inputValue.target);
}, true);

formParent.addEventListener('keyup', function (inputValue) {
    borderColorChange(inputValue.target);
});


formParent.addEventListener('change', function (inputValue) {
    borderColorChange(inputValue.target);
}, true);


formParent.addEventListener('blur', function (inputValue) {
    if (!isNaN(inputValue.target.value) && inputValue.target.value >= 0 || inputValue.target.value == '') {
        inputValue.target.style.border = '1px solid ';
        inputValue.target.style.outline = 'none';
    }
    else {
        inputValue.target.style.border = '1px solid red';
        inputValue.target.style.outline = 'none';
    }
}, true);


