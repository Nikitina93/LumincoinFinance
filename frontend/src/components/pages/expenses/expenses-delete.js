import {HttpUtils} from "../../../utils/http-utils";

export class ExpensesDelete {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        const url = new URLSearchParams(window.location.search);
        const id = url.get('id');

        this.deleteExpense(id).then();
    }

    async deleteExpense(id) {
        const result = await HttpUtils.request(`/categories/expense/` + id, 'DELETE', true);

        if (result.redirect) {
            return this.openNewRoute(result.redirect);
        }

        if (!result || result.error || (result.response && result.response.error)) {
            return console.log('Произошла ошибка по удалению дохода');
        }
        return this.openNewRoute('/expenses');
    }
}