export class Main {
    constructor() {
        this.pieChart();
        this.dateSelection();
        this.activateBlock();
        this.activateButton();
    }

    pieChart() {
        const myChart = document.getElementById('myChart');
        let legend = {
            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            datasets: [{
                data: [12, 19, 3, 5, 2],
                backgroundColor: ['#DC3545', '#FD7E14', '#FFC107', '#20C997', '#0D6EFD'],
            }]
        }
        let newChart = new Chart(myChart, {
            type: 'pie',
            data: legend
        })


        const myChartSecond = document.getElementById('myPieChart');
        let legendSecond = {
            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            datasets: [{
                data: [12, 19, 3, 5, 2],
                backgroundColor: ['#DC3545', '#FD7E14', '#FFC107', '#20C997', '#0D6EFD'],
            }]
        }
        let ChartSecond = new Chart(myChartSecond, {
            type: 'pie',
            data: legendSecond
        })
    }

    dateSelection() {
        $(function () {
            $("#datepicker-first").datepicker({
                dateFormat: 'dd-mm-yy',
                language: 'russian'
            });
            $("#datepicker-second").datepicker({
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
        const mainButton = document.getElementById('main');
        const svgMain = document.getElementById('svg-main');
        const categoryButton = document.getElementById('toggle');
        const svgCollapse = document.getElementById('collapsed-svg');
        mainButton.onclick
        mainButton.classList.add('active');
        svgMain.classList.add('active');

        categoryButton.addEventListener('click', function () {
            mainButton.classList.remove('active');
            svgMain.classList.remove('active');
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
        const inputDate = document.getElementById('datepicker-first');
        const inputDateFirst = document.getElementById('datepicker-second');

        todayButton.addEventListener('click', function () {
            todayButton.classList.add('active');
            weekButton.classList.remove('active');
            monthButton.classList.remove('active');
            yearButton.classList.remove('active');
            allButton.classList.remove('active');
            intervalButton.classList.remove('active');
            inputDate.disabled = true;
            inputDateFirst.disabled =true;
        });

        weekButton.addEventListener('click', function () {
            weekButton.classList.add('active');
            todayButton.classList.remove('active');
            monthButton.classList.remove('active');
            yearButton.classList.remove('active');
            allButton.classList.remove('active');
            intervalButton.classList.remove('active');
            inputDate.disabled = true;
            inputDateFirst.disabled =true;
        });

        monthButton.addEventListener('click', function () {
            monthButton.classList.add('active');
            todayButton.classList.remove('active');
            weekButton.classList.remove('active');
            yearButton.classList.remove('active');
            allButton.classList.remove('active');
            intervalButton.classList.remove('active');
            inputDate.disabled = true;
            inputDateFirst.disabled =true;
        });

        yearButton.addEventListener('click', function () {
            yearButton.classList.add('active');
            todayButton.classList.remove('active');
            weekButton.classList.remove('active');
            monthButton.classList.remove('active');
            allButton.classList.remove('active');
            intervalButton.classList.remove('active');
            inputDate.disabled = true;
            inputDateFirst.disabled =true;
        });

        allButton.addEventListener('click', function () {
            allButton.classList.add('active');
            todayButton.classList.remove('active');
            weekButton.classList.remove('active');
            monthButton.classList.remove('active');
            yearButton.classList.remove('active');
            intervalButton.classList.remove('active');
            inputDate.disabled = true;
            inputDateFirst.disabled =true;
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