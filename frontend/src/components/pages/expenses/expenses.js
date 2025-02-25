export class Expenses{
    constructor() {
        this.init();
        this.createElement();
        this.editIncome();
        this.activateBlock();
    }

    init () {
        this.deleteButton = document.getElementById('delete');
        this.notAgreeButton = document.getElementById('not-agree-button');
        this.creationElement = document.getElementById('creation');
        this.editElement = document.getElementById('edit');


        this.deleteButton.addEventListener('click', this.openPopUp);
        this.notAgreeButton.addEventListener('click', this.closePopUp);
    }

    openPopUp() {
        let popUp = document.getElementById('pop-up');
        popUp.classList.add('open');

    }

    closePopUp() {
        let popUp = document.getElementById('pop-up');
        popUp.classList.remove('open');
    }

    createElement() {
        this.creationElement.addEventListener('click', function () {
            location.href = '/creat-expenses';
        })
    }

    editIncome() {
        this.editElement.addEventListener('click', function () {
            location.href = '/edit-expenses';
        })
    }

    activateBlock(){
        const categoryButton = document.getElementById('toggle');
        const collapse = document.getElementById('dashboard-collapse');
        const expensesCollapse = document.getElementById('expenses-collapse');
        const svgCollapse = document.getElementById('collapsed-svg');
        categoryButton.onclick
        categoryButton.setAttribute("aria-expanded", "true");
        categoryButton.classList.remove('collapsed');
        categoryButton.style.borderRadius = '5px 5px 0px 0px';
        categoryButton.classList.add('active');
        svgCollapse.classList.add('active');
        expensesCollapse.classList.add('active');
        collapse.classList.add('show');
    }


}