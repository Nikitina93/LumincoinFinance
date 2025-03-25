import {HttpUtils} from "../../../utils/http-utils";
import config from "../../../../config/config";

export class Operations {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        this.creatingIncome = document.getElementById('creating-income');
        this.creatingExpense = document.getElementById('creating-expense');


        this.createIncome();
        this.editIncomeExpenses();
        this.dateSelection();
        this.activateBlock();
        this.activateButton();
        this.getOperations().then();
    }

    async getOperations() {
        // const result = await HttpUtils.request('/operations');
        // if(result.redirect){
        //     return this.openNewRoute(result.redirect);
        // }
        //
        // if (result.error || !result.response || (result.response && result.response.error )) {
        //     return alert('Возникла ошибка при запросе доходов и расходов. Обратитесь в поддержку');
        // }
        // this.showRecords(result.response);


    }

    showRecords(operations) {
        const recordsElement = document.getElementById('records');
        for (let i = 0; i < operations.length; i++) {
            const trElement = document.createElement('tr');
            trElement.insertCell().innerText = i + 1;

            let typeHtml = null;
            switch (operations[i].type) {
                case config.operationsTypes.expense:
                    typeHtml = '<span class ="text-danger">расход</span>';
                    break;
                case config.operationsTypes.income:
                    typeHtml = '<span class ="text-success">доход</span>';

                    break;
                default:
                    typeHtml = '<span class ="text-secondary">неизвестно</span>';
            }
            trElement.insertCell().innerText = typeHtml;

        }
    }


    createIncome() {
        this.creatingIncome.addEventListener('click', function () {
            location.href = '/creat-operation';
        })
    }

    editIncomeExpenses() {
        this.creatingExpense.addEventListener('click', function () {
            location.href = '/creat-operation';
        })
    }

    dateSelection() {
        $(function () {
            $("#datepicker").datepicker({
                dateFormat: 'dd-mm-yy',
                language: 'russian'
            });
            $("#datepicker-one").datepicker({
                dateFormat: 'dd-mm-yy',
            });
        });
        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: 'Пред',
            nextText: 'След',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Нед',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);
    }

    activateBlock() {

        const categoryButton = document.getElementById('toggle');
        const optionsButton = document.getElementById('operations');
        const svgOptions = document.getElementById('svg-operations');
        const svgCollapse = document.getElementById('collapsed-svg');
        optionsButton.onclick
        optionsButton.classList.add('active');
        svgOptions.classList.add('active')

        categoryButton.addEventListener('click', function () {
            optionsButton.classList.remove('active');
            svgOptions.classList.remove('active');
            categoryButton.classList.add('active');
            categoryButton.style.borderRadius = '5px 5px 0px 0px';
            svgCollapse.classList.add('active');
        })
    }

    activateButton() {
        const todayButton = document.getElementById('main-button-today');
        const weekButton = document.getElementById('main-button-week');
        const monthButton = document.getElementById('main-button-month');
        const yearButton = document.getElementById('main-button-year');
        const allButton = document.getElementById('main-button-all');
        const intervalButton = document.getElementById('main-button-interval');
        const inputDate = document.getElementById('datepicker');
        const inputDateFirst = document.getElementById('datepicker-one');

        todayButton.addEventListener('click', function () {
            todayButton.classList.add('active');
            weekButton.classList.remove('active');
            monthButton.classList.remove('active');
            yearButton.classList.remove('active');
            allButton.classList.remove('active');
            intervalButton.classList.remove('active');
            inputDate.disabled = true;
            inputDate.value = '';
            inputDateFirst.disabled = true;
            inputDateFirst.value = '';
        });

        weekButton.addEventListener('click', function () {
            weekButton.classList.add('active');
            todayButton.classList.remove('active');
            monthButton.classList.remove('active');
            yearButton.classList.remove('active');
            allButton.classList.remove('active');
            intervalButton.classList.remove('active');
            inputDate.disabled = true;
            inputDate.value = '';
            inputDateFirst.disabled = true;
            inputDateFirst.value = '';
        });

        monthButton.addEventListener('click', function () {
            monthButton.classList.add('active');
            todayButton.classList.remove('active');
            weekButton.classList.remove('active');
            yearButton.classList.remove('active');
            allButton.classList.remove('active');
            intervalButton.classList.remove('active');
            inputDate.disabled = true;
            inputDate.value = '';
            inputDateFirst.disabled = true;
            inputDateFirst.value = '';
        });

        yearButton.addEventListener('click', function () {
            yearButton.classList.add('active');
            todayButton.classList.remove('active');
            weekButton.classList.remove('active');
            monthButton.classList.remove('active');
            allButton.classList.remove('active');
            intervalButton.classList.remove('active');
            inputDate.disabled = true;
            inputDate.value = '';
            inputDateFirst.disabled = true;
            inputDateFirst.value = '';
        });

        allButton.addEventListener('click', function () {
            allButton.classList.add('active');
            todayButton.classList.remove('active');
            weekButton.classList.remove('active');
            monthButton.classList.remove('active');
            yearButton.classList.remove('active');
            intervalButton.classList.remove('active');
            inputDate.disabled = true;
            inputDate.value = '';
            inputDateFirst.disabled = true;
            inputDateFirst.value = '';
        });

        intervalButton.addEventListener('click', function () {
            intervalButton.classList.add('active');
            todayButton.classList.remove('active');
            weekButton.classList.remove('active');
            monthButton.classList.remove('active');
            yearButton.classList.remove('active');
            allButton.classList.remove('active');
            inputDate.removeAttribute('disabled');
            inputDateFirst.removeAttribute('disabled');
        });
    }


}