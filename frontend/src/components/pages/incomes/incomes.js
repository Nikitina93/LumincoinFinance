import {HttpUtils} from "../../../utils/http-utils";

export class Incomes {
    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;

        this.deleteButton = document.getElementById('agree-button');
        this.notDeleteButton = document.getElementById('not-agree-button');
        this.popUpElement = document.getElementById('pop-up');

        this.init().then();
    }


    async init() {
        const incomes = await HttpUtils.request('/categories/income', 'GET', true);

        if (incomes.error) {
            console.log(incomes.response.message);
            return incomes.redirect ? this.openNewRoute(incomes.redirect) : null;
        }

        const incomeCategories = document.querySelector('.categories');

        incomes.response.reverse();

        incomes.response.forEach(income => {
            const cardBox = document.createElement('div');
            cardBox.classList.add('box');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.innerText = income.title;

            const editLink = document.createElement('a');
            editLink.classList.add('btn', 'btn-primary');
            editLink.innerText = 'Редактировать';
            editLink.href = `/edit-income?id=${income.id}`;

            const deleteLink = document.createElement('a');
            deleteLink.classList.add('btn', 'btn-danger', 'btn-delete');
            deleteLink.innerText = 'Удалить';


            deleteLink.addEventListener('click', (event) => {
                event.preventDefault();
                this.popUpElement.classList.add('active');
                this.deleteButton.href = `/income/delete?id=${income.id}`
            });

            this.notDeleteButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.popUpElement.classList.remove('active');
            });

            cardBody.append(cardTitle);
            cardBody.append(editLink);
            cardBody.append(deleteLink);
            cardBox.append(cardBody);
            incomeCategories.prepend(cardBox);

        });
    }




}