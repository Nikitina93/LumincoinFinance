import {HttpUtils} from "../../../utils/http-utils";

export class IncomeCreate {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.incomeNameInput = document.getElementById('income-create');
        document.getElementById('create-btn').addEventListener('click', this.createIncome.bind(this));
        document.getElementById('cancel-btn').addEventListener('click', this.removeOnIncomePage.bind(this));
    }

    validate() {
        let result = true;
        if (this.incomeNameInput.value) {
            this.incomeNameInput.classList.remove('is-invalid');
        } else {
            result = false;
            this.incomeNameInput.classList.add('is-invalid');
        }
        return result;
    }

    removeOnIncomePage() {
        this.openNewRoute('/incomes');
    }

    async createIncome(e) {
        e.preventDefault()
        if (this.validate()) {
            const result = await HttpUtils.request('/categories/income', 'POST', true, {
                title: this.incomeNameInput.value
            })
            if (result.response && result.response.title && !result.error) {
                location.href = '/incomes';
            }
            if (result.error || !result.response || (result.response && result.response.error)) {
                return console.log('Не удалось осуществить запрос, попробуйте позже');
            }
        }
    }
}