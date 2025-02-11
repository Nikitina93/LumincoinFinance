export class Expenses{
    constructor() {
        this.init();
        this.createElement();
        this.editIncome();
    }

    init() {
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
}