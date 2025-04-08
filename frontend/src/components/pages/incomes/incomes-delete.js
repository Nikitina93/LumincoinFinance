import {HttpUtils} from "../../../utils/http-utils";

export class IncomeDelete {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        this.deleteIncome(id).then();
    }

    async deleteIncome(id) {
        const result = await HttpUtils.request(`/categories/income/` + id, 'DELETE', true);

        if (result.redirect) {
            return this.openNewRoute(result.redirect);
        }

        if (!result || result.error || (result.response && result.response.error)) {
            return console.log('Произошла ошибка по удалению дохода');
        }
        return this.openNewRoute('/incomes');
    }

}