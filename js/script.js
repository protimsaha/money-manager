document.getElementById('calculate-button').addEventListener('click', function () {
    let income = document.getElementById('income')
    let incomeValue = income.value

    let totalExpenses = document.getElementById('total-expenses')
    let totalExpensesValue = totalExpenses.innerText;

    console.log(incomeValue, totalExpensesValue)
    addValue()
})

function addValue() {
    let food = document.getElementById('food').value;
    let rent = document.getElementById('rent').value;
    let cloth = document.getElementById('cloth').value;

    let sum = parseInt(food) + parseInt(rent) + parseInt(cloth);

}