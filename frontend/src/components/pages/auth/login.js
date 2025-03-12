import {AuthUtils} from "../../../utils/auth-utils";
import {HttpUtils} from "../../../utils/http-utils";

export class Login {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;


        if (AuthUtils.getAuthInfo(AuthUtils.userKey)) {
            return this.openNewRoute('/');
        }

        this.emailElement = document.getElementById('email');
        this.passwordElement = document.getElementById('password');
        this.svgEmailElement = document.getElementById('svg');
        this.svgPasswordElement = document.getElementById('svg-second');
        this.rememberMeElement = document.getElementById('rememberMe');
        this.commonErrorElement = document.getElementById('common-error');

        document.getElementById('process-button').addEventListener('click', this.login.bind(this));
    }

    validateForm() {
        let isValid = true;
        if (this.emailElement.value && this.emailElement.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)) {
            this.emailElement.classList.remove('is-invalid');
        } else {
            this.emailElement.classList.add('is-invalid');
            this.svgEmailElement.style.borderColor = 'red';
            isValid = false;
        }
        if (this.passwordElement.value) {
            this.passwordElement.classList.remove('is-invalid');
        } else {
            this.passwordElement.classList.add('is-invalid');
            this.svgPasswordElement.style.borderColor = 'red';
            isValid = false;
        }
        return isValid
    }

    async login() {
        this.commonErrorElement.style.display = 'none';
        if (this.validateForm()) {

            const result = await HttpUtils.request('/login', 'POST',{
                email: this.emailElement.value,
                password: this.passwordElement.value,
                rememberMe: this.rememberMeElement.checked
            });

            if (result.error || !result.response || (result.response && (!result.response.tokens
                || !result.response.user.name || !result.response.user.lastName || !result.response.user.id))) {
                this.commonErrorElement.style.display = 'block';
                return;
            }

            AuthUtils.setTokens(
                {
                    accessToken: result.response.tokens.accessToken
                },
                {
                    refreshToken: result.response.tokens.refreshToken
                }
            );
            AuthUtils.setUser(
                {
                    name: result.response.user.name,
                    lastname: result.response.user.lastName,
                    id: result.response.user.id
                }
            )

            this.openNewRoute('/');
        }

    }
}