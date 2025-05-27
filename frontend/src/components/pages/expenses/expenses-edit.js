import {HttpUtils} from "../../../utils/http-utils";

export class ExpensesEdit {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        const url = new URLSearchParams(window.location.search);
        const expenseId = url.get('id');

        if (!expenseId) {
            return this.openNewRoute('/expenses');
        }

        this.inputNameElement = document.getElementById('edit-expenses');


        this.getExpense(expenseId).then();


    }

    async getExpense(id) {
        const expenses = await HttpUtils.request(`/categories/expense/${id}`);
        if (expenses.redirect) {
            return this.openNewRoute(expenses.redirect);
        }

        if (expenses && !expenses.error) {
            this.inputNameElement.value = expenses.response.title;
        }

        if (expenses.error || !expenses.response || (expenses.response && expenses.response.error)) {
            console.log('Произошла ошибка запроса расхода');
        }

        document.getElementById('save-expense').addEventListener('click', this.update.bind(this));
        document.getElementById('dont-save-expense').addEventListener('click', () => {
            this.inputNameElement.value = this.getExpenseResult.title;
            this.openNewRoute('/expenses');
        });

        this.getExpenseResult = expenses.response;

    }

    validateForm() {
        let result = true;

        if (this.inputNameElement.value) {
            this.inputNameElement.classList.remove('is-invalid');
        } else {
            this.inputNameElement.classList.add('is-invalid');
            result = false;
        }
        return result;
    }

    async update(e) {
        e.preventDefault();

        if (this.validateForm()) {
            if (this.inputNameElement.value !== this.getExpenseResult.title) {
                const result = await HttpUtils.request(`/categories/expense/${this.getExpenseResult.id}`, 'PUT', true, {
                    title: this.inputNameElement.value
                });

                if (result.response && !result.error) {
                    return this.openNewRoute('/expenses');
                }

                if (result.error || !result.response || (result.response && result.response.error)) {
                    return console.log('Название категории не удалось обновить. Попробуйте позже.');
                }

            }else if (this.inputNameElement.value === this.getExpenseResult.title) {
                return this.openNewRoute('/expenses');
            }
        }
    }
}