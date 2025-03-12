import {AuthUtils} from "../../../utils/auth-utils";
import {HttpUtils} from "../../../utils/http-utils";

export class SignUp {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        if (AuthUtils.getAuthInfo(AuthUtils.userKey)) {
            return this.openNewRoute('/');
        }

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

    async signUp() {
        this.commonErrorElement.style.display = 'none';
        if (this.validateForm()) {
            const result = await HttpUtils.request('/signup', 'POST',{
                name: this.nameElement.value,
                lastName: this.lastNameElement.value,
                email: this.emailElement.value,
                password: this.passwordElement.value,
                passwordRepeat: this.passwordRepeatElement.value
            });


            if (result.error || !result.response || (result.response && ( !result.response.user.name
                || !result.response.user.lastName || !result.response.user.id || !result.response.user.email))){
                this.commonErrorElement.style.display = 'block';
                return;
            }

            this.openNewRoute('/login');
        }


    }
}