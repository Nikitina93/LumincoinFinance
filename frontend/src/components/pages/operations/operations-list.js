import {HttpUtils} from "../../../utils/http-utils";

export class OperationsList {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.tableBodyElement = document.getElementById('table-body');
        this.filterButton = document.querySelectorAll('.filter-button');
        this.dateElements = document.getElementById('date-elements');

        this.DeleteOperationButton = document.getElementById('delete-operation');
        this.notDeleteOperationButton = document.getElementById('notDelete-operation');
        this.popUpElement = document.getElementById('pop-up-operation');
        this.activateBlock()
    }


    activateBlock() {

        const categoryButton = document.getElementById('toggle');
        const optionsButton = document.getElementById('options');
        const svgOptions = document.getElementById('svg-options');
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
}

