// calculate press
document.getElementById('calculate-button').addEventListener('click', function () {

    calculateButton();

})


// Calculate button calculation
function calculateButton() {
    let food = document.getElementById('food');
    let foodValue = food.value;

    let rent = document.getElementById('rent');
    let rentValue = rent.value;

    let cloth = document.getElementById('cloth');
    let clothValue = cloth.value;

    if (foodValue < 0 || rentValue < 0 || clothValue < 0) {
        const onlyPositiveNumber = document.getElementById('only-positive');
        onlyPositiveNumber.style.display = 'block'
    }

    else if (isNaN(foodValue) || isNaN(rentValue)) {
        const nanMessage = document.getElementById('not-a-number');
        nanMessage.style.display = 'block'
    }
    else if ((foodValue > 0 || rentValue > 0 || clothValue > 0)) {
        let sum = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothValue);

        let totalExpenses = document.getElementById('total-expenses')
        totalExpenses.innerText = sum;

        let income = document.getElementById('income');
        let incomeValue = income.value;

        let newBalance = parseFloat(incomeValue) - sum;
        let balance = document.getElementById('balance');
        balance.innerText = newBalance;

        if (sum > incomeValue) {

            const moreThanIncome = document.getElementById('more-than-income');
            moreThanIncome.style.display = 'block'
            // totalExpenses.innerText = 00;
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

    let balance = document.getElementById('balance').innerText;

    let savingAmount = document.getElementById('save-amount').innerText;

    let remainingBalance = parseFloat(balance) - parseFloat(savingAmount);

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

