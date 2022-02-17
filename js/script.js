// calculate press
document.getElementById('calculate-button').addEventListener('click', function () {

    calculateButton();

})


// Calculate button calculation
function calculateButton() {

    // variables
    let food = document.getElementById('food');
    let foodValue = food.value;

    let rent = document.getElementById('rent');
    let rentValue = rent.value;

    let cloth = document.getElementById('cloth');
    let clothValue = cloth.value;

    let income = document.getElementById('income');
    let incomeValue = income.value;

    // Error message for negative input value
    if (foodValue < 0 || rentValue < 0 || clothValue < 0 || incomeValue < 0) {
        const onlyPositiveNumber = document.getElementById('only-positive');
        onlyPositiveNumber.style.display = 'block'
    }

    // Error message for string input
    else if (isNaN(foodValue) || isNaN(rentValue) || isNaN(clothValue) || isNaN(incomeValue)) {
        const nanMessage = document.getElementById('not-a-number');
        nanMessage.style.display = 'block'
    }

    // Calculate Sum and update balance
    else if ((foodValue > 0 || rentValue > 0 || clothValue > 0)) {
        let sum = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothValue);

        // total expenses calculate
        let totalExpenses = document.getElementById('total-expenses')
        totalExpenses.innerText = sum;

        // balance calculate
        let newBalance = parseFloat(incomeValue) - sum;
        let balance = document.getElementById('balance');
        balance.innerText = newBalance;

        // Error message for cost more than money
        if (sum > incomeValue) {

            const moreThanIncome = document.getElementById('more-than-income');
            moreThanIncome.style.display = 'block'
            balance.innerText = 00;
        }
    }
}


// save function calculation
function saveButton() {
    // save calculationa
    const income = document.getElementById('income');
    let incomeValue = income.value;

    const save = document.getElementById('save');
    let saveValue = save.value;

    let saveAmount = incomeValue * (saveValue / 100);

    let balance = document.getElementById('balance');
    let balanceValue = balance.innerText;

    let savingOutput = document.getElementById('save-amount');
    let savingOutputValue = savingOutput.innerText;

    savingOutput.innerText = saveAmount;

    remainingBalance()
}


function remainingBalance() {

    // calculation remain and update balance
    let balance = document.getElementById('balance').innerText;

    let savingAmount = document.getElementById('save-amount').innerText;

    let remainingBalance = parseFloat(balance) - parseFloat(savingAmount);

    // remain error message
    if (remainingBalance < 0) {
        const remianMessage = document.getElementById('remain-balance');
        remianMessage.style.display = 'block'
    }
    else {
        let remainingBalanceOutput = document.getElementById('remaining-balance');
        remainingBalanceOutput.innerText = remainingBalance;
        const remianMessage = document.getElementById('remain-balance');
        remianMessage.style.display = 'none'
    }
}

