export class Logout {
    constructor(openNewRoute) {
        this.iconUserElement = document.getElementById('user-icon');
        this.logoutElement = document.getElementById('dropdown-menu');

        this.openNewRoute = openNewRoute;


        if (!localStorage.getItem('user') || !localStorage.getItem('refreshToken')) {
            return this.openNewRoute('/login');
        }

        this.logout().then();
    }

    openLogoutButton(){

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