import {HttpUtils} from "../../../utils/http-utils";

export class OperationsList {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.tableElement = document.getElementById('operations-table-body');
        this.links = document.querySelectorAll('.filter-button');
        this.dateElements = document.getElementById('date-elements');
        this.deleteButton = document.getElementById('delete-operation');
        this.notDeleteButton = document.getElementById('notDelete-operation');
        this.popUpElement = document.getElementById('pop-up-operation');

        this.activateBlock();
        this.navigation();
    }

    activateBlock() {
        const operationsButton = document.getElementById('options');
        const categoryButton = document.getElementById('toggle');
        const svgCollapse = document.getElementById('collapsed-svg');

        operationsButton.onclick;
        operationsButton.classList.add('active');


        categoryButton.addEventListener('click', function () {
            operationsButton.classList.add('active');
            operationsButton.classList.remove('active');
            categoryButton.classList.add('active');
            categoryButton.style.borderRadius = '5px 5px 0px 0px';
            svgCollapse.classList.add('active');
        })

    }

    navigation() {

        this.dateElements.style.opacity = '0';

        const dateFrom = document.getElementById('dateFrom');
        const dateTo = document.getElementById('dateTo');


        document.getElementById('dateFromLabel').addEventListener('click', function () {
            const dateInput = document.getElementById('dateFrom');
            dateInput.classList.toggle('hidden');
            dateInput.focus();
        });

        document.getElementById('dateToLabel').addEventListener('click', function () {
            const dateInput = document.getElementById('dateTo');
            dateInput.classList.toggle('hidden');
            dateInput.focus();
        });

        document.getElementById('dateFrom').addEventListener('change', function () {
            this.classList.add('hidden');
            const selectedDate = new Date(this.value);
            const day = String(selectedDate.getDate()).padStart(2, '0');
            const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
            const year = selectedDate.getFullYear();
            document.getElementById('dateFromLabel').textContent = `${day}-${month}-${year}`;
        });

        document.getElementById('dateTo').addEventListener('change', function () {
            this.classList.add('hidden');
            const selectedDate = new Date(this.value);
            const day = String(selectedDate.getDate()).padStart(2, '0');
            const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
            const year = selectedDate.getFullYear();
            document.getElementById('dateToLabel').textContent = `${day}-${month}-${year}`;
        });

        dateFrom.addEventListener('change', () => {
            sessionStorage.setItem('dateFrom', dateFrom.value);
            this.tableElement.innerHTML = '';
            return this.getOperations(`/operations?period=interval&dateFrom=${dateFrom.value}&dateTo=${dateTo.value}`).then();
        });


        dateFrom.value = sessionStorage.getItem('dateFrom');
        dateTo.addEventListener('change', () => {
            sessionStorage.setItem('dateTo', dateTo.value);
            this.tableElement.innerHTML = '';
            return this.getOperations(`/operations?period=interval&dateFrom=${dateFrom.value}&dateTo=${dateTo.value}`).then();
        });
        dateTo.value = sessionStorage.getItem('dateTo');

        const dateFromItem = sessionStorage.getItem('dateFrom');
        const dateToItem = sessionStorage.getItem('dateTo');

        const pathname = window.location.href.replace(window.location.origin, '');
        console.log(pathname)


        this.links.forEach(activeLink => {

            activeLink.addEventListener('click', () => {
                activeLink.classList.remove('active');
                activeLink.classList.remove('disabled');
            });

            let linkPathname = activeLink.href.replace(window.location.origin, '');

            if (pathname === linkPathname) {
                activeLink.classList.add('disabled');
                activeLink.classList.add('active');
                this.getOperations(linkPathname).then();
                if (pathname.includes('period=interval')) {
                    this.dateElements.style.opacity = '1';
                    let url = new URL(window.location.href);
                    url.searchParams.append('dateFrom', dateFromItem);
                    url.searchParams.append('dateTo', dateToItem);
                    linkPathname = url.href.replace(window.location.origin, '');
                    console.log(linkPathname)
                    return this.getOperations(linkPathname).then();
                }
            }
        });
    }


    async getOperations(url) {
        const response = await HttpUtils.request(url);

        if (response.redirect) {
            return this.openNewRoute(response.redirect);
        }

        if (response.response && !response.error) {
            this.showOperations(response.response);
        } else {
            console.log('Произошла ошибка запроса доходов и расходов. Обратитесь в поддержку');
        }
    }

    showOperations(operations) {
        this.tableElement.innerHTML = '';

        operations.sort((a, b) => a.id - b.id);

        operations.forEach((operation, i) => {
            const trElement = document.createElement('tr');
            trElement.setAttribute('data-label', '№ операции:');
            trElement.insertCell().innerText = i + 1;
            trElement.style.borderBottom = '1px solid #DEE2E6';

            const typeOperationElement = document.createElement('td');
            typeOperationElement.classList.add('table-label');
            typeOperationElement.setAttribute('data-label', 'Тип:');
            const type = operation.type;
            switch (type) {
                case 'expense':
                    typeOperationElement.classList.add('table-expenses');
                    typeOperationElement.innerText = 'расход';
                    typeOperationElement.style.color = '#DC3545';
                    break;
                case 'income':
                    typeOperationElement.classList.add('table-income');
                    typeOperationElement.innerText = 'доход';
                    typeOperationElement.style.color = '#198754';
                    break;
                default:
                    typeOperationElement.innerText = 'Неизвестно'
                    break;
            }

            const categoryOperationElement = document.createElement('td');
            categoryOperationElement.classList.add('table-label');
            categoryOperationElement.setAttribute('data-label', 'Категория:');
            categoryOperationElement.innerText = operation.category;

            const amountOperationElement = document.createElement('td');
            amountOperationElement.classList.add('table-label');
            amountOperationElement.setAttribute('data-label', 'Сумма:');
            amountOperationElement.innerText = `${operation.amount}` + '$';

            const dateOperationElement = document.createElement('td');
            dateOperationElement.classList.add('table-label');
            dateOperationElement.setAttribute('data-label', 'Дата:');
            const date = operation.date.split('-');
            const dateToUTC = new Date(Date.UTC(date[0], date[1] - 1, date[2]));
            dateOperationElement.innerText = dateToUTC.toLocaleDateString('ru-RU');

            const commentOperationElement = document.createElement('td');
            commentOperationElement.classList.add('table-label');
            commentOperationElement.setAttribute('data-label', 'Комментарий:');
            commentOperationElement.innerText = operation.comment;

            const actionsOperationElement = document.createElement('td');
            actionsOperationElement.classList.add('table-icons');

            const actionDeleteOperationElement = document.createElement('a');
            actionDeleteOperationElement.classList.add('table-icon');
            actionDeleteOperationElement.href = `javascript:void(0)`;
            actionDeleteOperationElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>`
            actionDeleteOperationElement.style.marginRight = '10.5px';

            const actionEditOperationElement = document.createElement('a');
            actionEditOperationElement.classList.add('table-icon');
            actionEditOperationElement.href = `edit-operation?id=${operation.id}`
            actionEditOperationElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                </svg>`

            actionDeleteOperationElement.addEventListener('click', (event) => {
                event.preventDefault();
                this.popUpElement.style.display = 'block';
                this.deleteButton.href = `/operations-delete?id=${operation.id}`;
            })

            this.notDeleteButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.popUpElement.style.display = 'none';
            })

            actionsOperationElement.append(actionDeleteOperationElement, actionEditOperationElement)

            trElement.append(typeOperationElement, categoryOperationElement, amountOperationElement, dateOperationElement, commentOperationElement, actionsOperationElement);
            this.tableElement.append(trElement);
        })
    }

}

