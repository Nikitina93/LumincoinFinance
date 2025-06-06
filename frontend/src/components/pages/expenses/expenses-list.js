import {HttpUtils} from "../../../utils/http-utils";

export class ExpensesList {
    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;

        this.deleteButton = document.getElementById('agree-button');
        this.notDeleteButton = document.getElementById('not-agree-button');
        this.popUpElement = document.getElementById('pop-up');
        this.activateBlock();
        this.init().then();
    }

    activateBlock() {
        const categoryButton = document.getElementById('toggle');
        const collapse = document.getElementById('dashboard-collapse');
        const expensesCollapse = document.getElementById('expenses-collapse');
        const iconCollapse = document.getElementById('collapsed-svg');
        categoryButton.onclick
        categoryButton.setAttribute("aria-expanded", "true");
        categoryButton.classList.remove('collapsed');
        categoryButton.style.borderRadius = '5px 5px 0px 0px';
        categoryButton.classList.add('active');
        iconCollapse.classList.add('active');
        expensesCollapse.classList.add('active');
        collapse.classList.add('show');
    }

    async init() {
        const expenses = await HttpUtils.request('/categories/expense', 'GET', true);

        if (expenses.error) {
            console.log(expenses.response.message);
            return expenses.redirect ? this.openNewRoute(expenses.redirect) : null;
        }

        const expenseCategories = document.getElementById('category-expenses');

        expenses.response.reverse();

        expenses.response.forEach(expense => {
            const cardBox = document.createElement('div');
            cardBox.classList.add('box');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.innerText = expense.title;

            const editExpensesButton = document.createElement('a');
            editExpensesButton.classList.add('btn', 'btn-primary');
            editExpensesButton.innerText = 'Редактировать';
            editExpensesButton.href = `/expenses-edit?id=${expense.id}`;

            const deleteExpensesButton = document.createElement('a');
            deleteExpensesButton.classList.add('btn', 'btn-danger', 'btn-delete');
            deleteExpensesButton.innerText = 'Удалить';


            deleteExpensesButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.popUpElement.classList.add('open');
                this.deleteButton.href = `/expenses-delete?id=${expense.id}`;
            });


            this.notDeleteButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.popUpElement.classList.remove('open');
            });

            cardBody.append(cardTitle);
            cardBody.append(editExpensesButton);
            cardBody.append(deleteExpensesButton);
            cardBox.append(cardBody);
            expenseCategories.prepend(cardBox);

        });
    }


}