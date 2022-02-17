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
        return nanMessage.style.display = 'block'
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
    }

    // income.value = '';
    // food.value = '';
    // rent.value = '';
    // cloth.value = '';
}

// save function calculation
function saveButton() {

    let income = document.getElementById('income');
    let incomeValue = income.value;
}

