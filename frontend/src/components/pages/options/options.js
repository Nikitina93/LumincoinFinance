export class Options{
    constructor() {
        this.creatingIncome = document.getElementById('creating-income');
        this.creatingExpense = document.getElementById('creating-expense');

        this.createIncome();
        this.editIncomeExpenses();

    }

    createIncome() {
        this.creatingIncome.addEventListener('click', function () {
            location.href = '/creat-option';
        })
    }

    editIncomeExpenses(){
        this.creatingExpense.addEventListener('click', function (){
            location.href = '/creat-option';
        })
    }
}