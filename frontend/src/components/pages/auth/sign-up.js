export class SignUp{
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        // if(localStorage.getItem('user')){
        //     return this.openNewRoute('/');
        // }

        this.nameElement = document.getElementById('name');
        this.lastNameElement = document.getElementById('lastName');
        this.emailElement = document.getElementById('email');
        this.passwordElement = document.getElementById('password');
        this.passwordRepeatElement = document.getElementById('passwordRepeat');
        this.svgNameElement = document.getElementById('svg');
        this.svgLastNameElement = document.getElementById('svg-first');
        this.svgEmailElement = document.getElementById('svg-second');
        this.svgPasswordElement = document.getElementById('svg-third');
        this.svgPasswordRepeatElement = document.getElementById('svg-four');
        this.commonErrorElement = document.getElementById('common-error');

        document.getElementById('process-button').addEventListener('click', this.signUp.bind(this));
    }

    validateForm() {
        let isValid = true;

        if (this.nameElement.value) {
            this.passwordElement.classList.remove('is-invalid');
        } else {
            this.nameElement.classList.add('is-invalid');
            this.svgNameElement.style.borderColor = 'red';
            isValid = false;
        }

        if (this.lastNameElement.value) {
            this.lastNameElement.classList.remove('is-invalid');
        } else {
            this.lastNameElement.classList.add('is-invalid');
            this.svgLastNameElement.style.borderColor = 'red';
            isValid = false;
        }

        if (this.emailElement.value && this.emailElement.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
            this.emailElement.classList.remove('is-invalid');
        } else {
            this.emailElement.classList.add('is-invalid');
            this.svgEmailElement.style.borderColor = 'red';
            isValid = false;
        }

        if (this.passwordElement.value && this.passwordElement.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/)) {
            this.passwordElement.classList.remove('is-invalid');
        } else {
            this.passwordElement.classList.add('is-invalid');
            this.svgPasswordElement.style.borderColor = 'red';
            isValid = false;
        }

        if (this.passwordRepeatElement.value && this.passwordRepeatElement.value === this.passwordElement.value) {
            this.passwordRepeatElement.classList.remove('is-invalid');
        } else {
            this.passwordRepeatElement.classList.add('is-invalid');
            this.svgPasswordRepeatElement.style.borderColor = 'red';
            isValid = false;
        }
        return isValid
    }

    async signUp(){
        this.commonErrorElement.style.display = 'none';
        if (this.validateForm()) {
            const response = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: this.nameElement.value,
                    lastName: this.lastNameElement.value,
                    email: this.emailElement.value,
                    password: this.passwordElement.value,
                    passwordRepeat: this.passwordRepeatElement.value
                })
            });

            const result = await response.json();

            if (result.error || !result.user.name || !result.user.lastName || !result.user.id || !result.user.email) {
                this.commonErrorElement.style.display = 'block';
                return;
            }

            localStorage.setItem('user', JSON.stringify({
                name: result.user.name,
                lastName: result.user.lastName,
                id: result.user.id,
                email: result.user.email
            }));

            this.openNewRoute('/');
        }


    }
}