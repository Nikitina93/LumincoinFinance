import {Main} from "./components/pages/main";
import {Incomes} from "./components/pages/incomes/incomes";
import {CreatIncome} from "./components/pages/incomes/creat-income";
import {EditIncome} from "./components/pages/incomes/edit-income";
import {Expenses} from "./components/pages/expenses/expenses";
import {CreatExpenses} from "./components/pages/expenses/creat-expenses";
import {EditExpenses} from "./components/pages/expenses/edit-expenses";
import {Operations} from "./components/pages/options/operations";
import {CreatOperation} from "./components/pages/options/creat-operation";
import {EditOperation} from "./components/pages/options/edit-operation";
import {Login} from "./components/pages/auth/login";
import {SignUp} from "./components/pages/auth/sign-up";
import {Logout} from "./components/pages/auth/logout";
import {AuthUtils} from "./utils/auth-utils";

export class Router {
    constructor() {
        this.titlePageElement = document.getElementById('title');
        this.contentPageElement = document.getElementById('content');



        this.initEvents();

        this.routes = [
            {
                route: '/',
                title: 'Главная',
                filePathTemplate: '/templates/pages/main.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new Main();
                }
            },
            {
                route: '/login',
                title: 'Авторизация',
                filePathTemplate: '/templates/pages/auth/login.html',
                useLayout: false,
                load: () => {
                    new Login(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/sign-up',
                title: 'Регистрация',
                filePathTemplate: '/templates/pages/auth/sign-up.html',
                useLayout: false,
                load: () => {
                    new SignUp(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/logout',
                load: () => {
                    new Logout(this.openNewRoute.bind(this))
                }
            },
            {
                route: '/incomes',
                title: 'Доходы',
                filePathTemplate: '/templates/pages/incomes/incomes.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new Incomes();
                }
            },
            {
                route: '/creat-income',
                title: 'Создание дохода',
                filePathTemplate: '/templates/pages/incomes/creat-income.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new CreatIncome();
                }
            },
            {
                route: '/edit-income',
                title: 'Редактирвание дохода',
                filePathTemplate: '/templates/pages/incomes/edit-income.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new EditIncome();
                }
            },
            {
                route: '/expenses',
                title: 'Расходы',
                filePathTemplate: '/templates/pages/expenses/expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new Expenses();
                }
            },
            {
                route: '/creat-expenses',
                title: 'Создание расхода',
                filePathTemplate: '/templates/pages/expenses/creat-expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new CreatExpenses();
                }
            },
            {
                route: '/edit-expenses',
                title: 'Редактирование расхода',
                filePathTemplate: '/templates/pages/expenses/edit-expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new EditExpenses();
                }
            },
            {
                route: '/operations',
                title: 'Доходы & Расходы',
                filePathTemplate: '/templates/pages/operations/operations.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new Operations();
                }
            },
            {
                route: '/creat-operation',
                title: 'Создание дохода/расхода',
                filePathTemplate: '/templates/pages/operations/creat-operation.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new CreatOperation();
                }
            },
            {
                route: '/edit-operation',
                title: 'Редактирование дохода/расхода',
                filePathTemplate: '/templates/pages/operations/edit-operation.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new EditOperation();
                }
            },
        ];
    }

    initEvents() {
        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));
        window.addEventListener('popstate', this.activateRoute.bind(this));
        document.addEventListener('click', this.clickHandler.bind(this));
    }

    async openNewRoute(url) {
        const currentRoute = window.location.pathname;
        history.pushState({}, '', url);  // чтобы в историю браузера добавить url-адреса)
        await this.activateRoute(null, currentRoute);
    }

    async clickHandler(e) {
        let element = null;
        if (e.target.nodeName === 'A') {
            element = e.target;
        } else if (e.target.parentNode.nodeName === 'A') {
            element = e.target.parentNode;
        }

        if (element) {
            e.preventDefault();

            const url = element.href.replace(window.location.origin, '');
            if (!url || url === '/#' || url.startsWith('javascript:void(0)')) {
                return
            }

            await this.openNewRoute(url);
        }
    }

    async activateRoute() {
        const urlRoute = window.location.pathname;
        const newRoute = this.routes.find(item => item.route === urlRoute);


        if (newRoute) {
            if (newRoute.title) {
                this.titlePageElement.innerText = newRoute.title + ' | Lumincoin Finance';
            }
            if (newRoute.filePathTemplate) {
                let contentBlock = this.contentPageElement;

                if (newRoute.useLayout) {
                    this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(response => response.text());
                    contentBlock = document.getElementById('content-layout');

                } else {
                    this.contentPageElement = document.getElementById('content');
                }

                contentBlock.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());
            }
            if (newRoute.load && typeof newRoute.load === 'function') {
                const userInfo = AuthUtils.getUserInfo();
                const accessToken = localStorage.getItem(AuthUtils.accessTokenKey);
                if(userInfo && accessToken){
                    document.getElementById('profile-user').innerText = userInfo.name + ' ' + userInfo.lastName;
                }
                if (!accessToken && newRoute.route !== '/login' && newRoute.route !== '/sign-up') {
                    return await this.openNewRoute('/login');
                }
                if(accessToken && newRoute.route === '/login' && newRoute.route === '/sign-up'){
                    return await this.openNewRoute('/')
                }
                newRoute.load();
            }

        } else {
            console.log('No route found');
            history.pushState({}, '', '/');  // чтобы в историю браузера добавить url-адреса)
            await this.activateRoute();
        }
    }

}