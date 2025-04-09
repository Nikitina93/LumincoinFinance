import {HttpUtils} from "../../../utils/http-utils";

export class IncomesList {
    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;

        this.deleteIncomeButton = document.getElementById('agree-button');
        this.notDeleteButton = document.getElementById('not-agree-button');
        this.popUpElement = document.getElementById('pop-up');
this.activateBlock()
        this.init().then();
    }
    activateBlock() {
        const categoryButton = document.getElementById('toggle');
        const collapse = document.getElementById('dashboard-collapse');
        const incomesCollapse = document.getElementById('incomes-collapse');
        const svgCollapse = document.getElementById('collapsed-svg');
        categoryButton.onclick;
        categoryButton.setAttribute("aria-expanded", "true");
        categoryButton.classList.remove('collapsed');
        categoryButton.style.borderRadius = '5px 5px 0px 0px';
        categoryButton.classList.add('active');
        svgCollapse.classList.add('active');
        incomesCollapse.classList.add('active');
        collapse.classList.add('show');

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

            const deleteButton = document.createElement('a');
            deleteButton.classList.add('btn', 'btn-danger', 'btn-delete');
            deleteButton.innerText = 'Удалить';


            deleteButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.popUpElement.classList.add('open');
                this.deleteIncomeButton.href = `/delete-income?id=${income.id}`;
            });


            this.notDeleteButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.popUpElement.classList.remove('open');
            });

            cardBody.append(cardTitle);
            cardBody.append(editLink);
            cardBody.append(deleteButton);
            cardBox.append(cardBody);
            incomeCategories.prepend(cardBox);

        });
    }


}