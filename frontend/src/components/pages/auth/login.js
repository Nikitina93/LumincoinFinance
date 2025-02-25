export class Login {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        // if(localStorage.getItem('user')){
        //     return this.openNewRoute('/');
        // }

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
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email: this.emailElement.value,
                    password: this.passwordElement.value,
                    rememberMe: this.rememberMeElement.checked
                })
            });

            const result = await response.json();
            if (result.error || !result.tokens.accessToken || !result.tokens.refreshToken
                || !result.user.name || !result.user.lastName || !result.user.id) {
                this.commonErrorElement.style.display = 'block';
                return;
            }

            localStorage.setItem('tokens', JSON.stringify({
                accessToken: result.tokens.accessToken,
                refreshToken: result.tokens.refreshToken
            }));

            localStorage.setItem('user', JSON.stringify({
                name: result.user.name,
                lastName: result.user.lastName,
                id: result.user.id
            }));

            this.openNewRoute('/');
        }

    }
}