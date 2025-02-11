export class Logout {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;


        this.iconElement = document.getElementById('user-icon');

        if (!localStorage.getItem('user') || !localStorage.getItem('refreshToken')) {
            return this.openNewRoute('/login');
        }

        this.logout().then();
    }

    openPopUp() {
        let popUp = document.getElementById('pop-up');

        popUp.classList.add('open');

    }
    closePopUp() {
        let popUp = document.getElementById('pop-up');
        popUp.classList.remove('open');
    }

    async logout() {

        const response = await fetch('http://localhost:3000/api/logout', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                refreshToken: localStorage.getItem('refreshToken')
            })
        });


        localStorage.removeItem('tokens');
        localStorage.removeItem('user');

        this.openNewRoute('/login');
    }


}