import {HttpUtils} from "../../utils/http-utils";

export class Main {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;
        this.dateElements = document.getElementById('date-elements');
        this.dateFromElement = document.getElementById('dateFrom');
        this.dateToElement = document.getElementById('dateTo');
        this.links = document.querySelectorAll('.filter-button');
        this.incomesChartElement = document.getElementById('incomesChart');
        this.expenseChartElement = document.getElementById('expenseChart');

        this.activateBlock();
        this.navigate();
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

    navigate() {
        this.dateElements.style.display = 'none';

        let dateFrom = sessionStorage.getItem('dateFrom');
        let dateTo = sessionStorage.getItem('dateTo');

        if (dateFrom) {
            this.dateFromElement.value = dateFrom;
        }

        if (dateTo) {
            this.dateToElement.value = dateTo;
        }

        this.dateFromElement.addEventListener('change', () => {
            sessionStorage.setItem('dateFrom', this.dateFromElement.value);
            return this.getDataForChart(`interval&dateFrom=${this.dateFromElement.value}&dateTo=${this.dateToElement.value}`).then();
        });

        this.dateToElement.addEventListener('change', () => {
            sessionStorage.setItem('dateTo', this.dateToElement.value);
            return this.getDataForChart(`interval&dateFrom=${this.dateFromElement.value}&dateTo=${this.dateToElement.value}`).then();
        });

        this.getDataForChart('today').then();
        this.links[0].classList.add('active');
        this.links[0].classList.add('disabled');

        this.links.forEach(activeLink => {
            activeLink.addEventListener('click', () => {
                this.links.forEach(links => {
                    links.classList.remove('active');
                    links.classList.remove('disabled');
                });
                switch (activeLink.id) {
                    case 'today':
                        this.dateElements.style.display = 'none';
                        activeLink.classList.add('disabled');
                        activeLink.classList.add('active');
                        this.getDataForChart('today').then();
                        break;
                    case 'week':
                        this.dateElements.style.display = 'none';
                        activeLink.classList.add('disabled');
                        activeLink.classList.add('active');
                        this.getDataForChart('week').then();
                        break;
                    case 'month':
                        this.dateElements.style.display = 'none';
                        activeLink.classList.add('disabled');
                        activeLink.classList.add('active');
                        this.getDataForChart('month').then();
                        break;
                    case 'all':
                        this.dateElements.style.display = 'none';
                        activeLink.classList.add('disabled');
                        activeLink.classList.add('active');
                        this.getDataForChart('all').then();
                        break;
                    case 'interval':
                        activeLink.classList.add('disabled');
                        activeLink.classList.add('active');
                        this.dateElements.style.display = 'block';
                        this.getDataForChart(`interval&dateFrom=${this.dateFromElement.value}&dateTo=${this.dateToElement.value}`).then();
                        break;
                    default:
                        activeLink.classList.remove('active');
                        break;
                }
            });
        });
    }
    async getDataForChart(period) {
        const result = await HttpUtils.request(`/operations?period=${period}`);

        if (result.response && !result.error) {

            const income = result.response.filter(item => item.type === 'income');
            const expense = result.response.filter(item => item.type === 'expense');

            if (income) {
                let chartStatus = Chart.getChart('incomesChart');
                if (chartStatus) {
                    chartStatus.destroy();
                }

                const incomeNames = []
                income.forEach(item => incomeNames.push(item.category));
                const uniqueNamesIncome = Array.from(new Set(incomeNames));

                const labelsCategoryIncome = [];
                const datasetsDataIncome = [];

                const myFunc = function (name, array) {
                    const res = array.filter(item => {
                        return item.category === name
                    });
                    const sum = res.reduce((acc, item) => {
                        return acc += item.amount
                    }, 0)
                    const result = res.map(item => {
                        return {
                            category: item.category,
                            amount: sum
                        }
                    })
                    labelsCategoryIncome.push(result[0].category)
                    datasetsDataIncome.push(result[0].amount)
                }

                uniqueNamesIncome.forEach(name => {
                    myFunc(name, income)
                })


                const config = {
                    type: 'pie',
                    data: {
                        labels: labelsCategoryIncome,
                        datasets: [{
                            data: datasetsDataIncome,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        color: 'black',
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    font: {
                                        size: 12,
                                        family: 'Roboto',
                                    },
                                    boxWidth: 35,
                                },
                            },
                            title: {
                                display: true,
                                text: 'Доходы',
                                color: '#290661',
                                font: {
                                    size: 28,
                                    family: 'Roboto'
                                },
                            }
                        },
                    },
                }

                new Chart(this.incomesChartElement, config);
            }

            if (expense) {
                let chartStatus = Chart.getChart('expenseChart');
                if (chartStatus) {
                    chartStatus.destroy();
                }

                const expenseNames = []
                expense.forEach(item => expenseNames.push(item.category));
                const uniqueNamesExpense = Array.from(new Set(expenseNames));

                const labelsCategoryExpense = [];
                const datasetsDataExpense = [];

                const myFunc = function (name, array) {
                    const res = array.filter(item => {
                        return item.category === name;
                    });
                    const sum = res.reduce((acc, item) => {
                        return acc += item.amount;
                    }, 0)
                    const result = res.map(item => {
                        return {
                            category: item.category,
                            amount: sum
                        }
                    })
                    labelsCategoryExpense.push(result[0].category)
                    datasetsDataExpense.push(result[0].amount)
                }

                uniqueNamesExpense.forEach(name => {
                    myFunc(name, expense)
                })

                const config = {
                    type: 'pie',
                    data: {
                        labels: labelsCategoryExpense,
                        datasets: [{
                            data: datasetsDataExpense,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        color: 'black',
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    font: {
                                        size: 12,
                                        family: 'Roboto',
                                    },
                                    boxWidth: 35,
                                },
                            },
                            title: {
                                display: true,
                                text: 'Расходы',
                                color: '#290661',
                                font: {
                                    size: 28,
                                    family: 'Roboto'
                                }
                            },
                        },
                    },
                }

                new Chart(this.expenseChartElement, config);
            }


        } else {
            console.log('Не удалось получить данные по доходам и расходам')
        }
    }

}