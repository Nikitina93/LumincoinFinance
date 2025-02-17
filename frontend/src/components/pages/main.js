export class Main {
    constructor() {

        this.pieChart();
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
}