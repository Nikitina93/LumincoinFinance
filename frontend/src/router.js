import {Main} from "./components/pages/main";
import {IncomesList} from "./components/pages/incomes/incomes-list";
import {IncomeCreate} from "./components/pages/incomes/income-create";
import {IncomeEdit} from "./components/pages/incomes/income-edit";
import {ExpensesList} from "./components/pages/expenses/expenses-list";
import {ExpensesCreate} from "./components/pages/expenses/expenses-create";
import {ExpensesEdit} from "./components/pages/expenses/expenses-edit";
import {OperationsList} from "./components/pages/operations/operations-list";
import {OperationsCreate} from "./components/pages/operations/operations-create";
import {OperationsEdit} from "./components/pages/operations/operations-edit";
import {Login} from "./components/pages/auth/login";
import {SignUp} from "./components/pages/auth/sign-up";
import {Logout} from "./components/pages/auth/logout";
import {AuthUtils} from "./utils/auth-utils";
import {IncomeDelete} from "./components/pages/incomes/incomes-delete";
import {ExpensesDelete} from "./components/pages/expenses/expenses-delete";
import {OperationsDelete} from "./components/pages/operations/operations-delete";
import {HttpUtils} from "./utils/http-utils";

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
                    new Main(this.openNewRoute.bind(this));
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
                    new IncomesList(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/create-income',
                title: 'Создание дохода',
                filePathTemplate: '/templates/pages/incomes/create-income.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomeCreate(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/edit-income',
                title: 'Редактирвание дохода',
                filePathTemplate: '/templates/pages/incomes/edit-income.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new IncomeEdit(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/delete-income',
                load: () => {
                    new IncomeDelete(this.openNewRoute.bind(this));
                },
            },
            {
                route: '/expenses',
                title: 'Расходы',
                filePathTemplate: '/templates/pages/expenses/expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesList(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/create-expenses',
                title: 'Создание расхода',
                filePathTemplate: '/templates/pages/expenses/create-expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesCreate(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/expenses-edit',
                title: 'Редактирование расхода',
                filePathTemplate: '/templates/pages/expenses/edit-expenses.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new ExpensesEdit(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/expenses-delete',
                load: () => {
                    new ExpensesDelete(this.openNewRoute.bind(this));
                },
            },
            {
                route: '/operations',
                title: 'Доходы & Расходы',
                filePathTemplate: '/templates/pages/operations/operations-list.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new OperationsList(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/creat-operation',
                title: 'Создание дохода/расхода',
                filePathTemplate: '/templates/pages/operations/creat-operation.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new OperationsCreate(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/edit-operation',
                title: 'Редактирование дохода/расхода',
                filePathTemplate: '/templates/pages/operations/edit-operation.html',
                useLayout: '/templates/layout.html',
                load: () => {
                    new OperationsEdit(this.openNewRoute.bind(this));
                }
            },
            {
                route: '/operations-delete',
                load: () => {
                    new OperationsDelete(this.openNewRoute.bind(this));
                },
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
        const accessToken = localStorage.getItem(AuthUtils.accessTokenKey);

        if (newRoute) {
            // Проверяем, если пользователь уже авторизован
            if (accessToken) {
                // Если пользователь пытается перейти на страницы входа или регистрации
                if (newRoute.route === '/login' || newRoute.route === '/sign-up') {
                    // Перенаправляем на главную страницу или другую страницу
                    return await this.openNewRoute('/');
                }
            } else {
                // Если пользователь не авторизован и пытается перейти на защищенные страницы
                if (newRoute.route !== '/login' && newRoute.route !== '/sign-up') {
                    return await this.openNewRoute('/login');
                }
            }

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
                const userInfo = JSON.parse(localStorage.getItem(AuthUtils.userInfoKey));

                // Проверяем наличие имя пользователя перед его использованием
                const profileUserElement = document.getElementById('profile-user');
                if (userInfo) {
                    if (profileUserElement) {
                        profileUserElement.innerText = `${userInfo.name} ${userInfo.lastName}`;
                    }
                    await this.showBalance();
                }

                newRoute.load();
            }

        } else {
            console.log('No route found');
            history.pushState({}, '', '/');  // чтобы в историю браузера добавить url-адреса)
            await this.activateRoute();
        }
    }


// Работа с балансом
    async showBalance() {
        const result = await HttpUtils.request('/balance');
        if (result.response && !result.redirect) {
            this.balance = result.response.balance
            this.balanceElement = document.getElementById('balance');
            this.balanceElementPopup = document.getElementById('balance-popup');
            this.balanceElement.innerText = this.balance.toString();
            this.balanceElementPopup.value = this.balance;
        } else {
            return this.openNewRoute(result.redirect);
        }
        this.showBalancePopup();
    }

    showBalancePopup() {
        this.balancePopupWindow = document.querySelector('.balance-popup');
        this.balanceElement.addEventListener('click', () => {
            this.balancePopupWindow.style.display = 'flex';
        });
        document.getElementById('balance-btn').addEventListener('click', this.changeBalance.bind(this));
        document.getElementById('balance-close').addEventListener('click', ()=>{
            this.balancePopupWindow.style.display = 'none';
        })
    }

    validateBalance() {
        let result = true;
        this.balanceError = document.querySelector('.balance-popup-error');

        if (this.balanceElementPopup.value) {
            this.balanceError.style.display = 'none';
        } else {
            this.balanceError.style.display = 'block';
            result = false;
        }
        return result;
    }

    async changeBalance() {
        if (this.validateBalance()) {
            if (+this.balanceElementPopup.value !== +this.balance) {
                const result = await HttpUtils.request('/balance', 'PUT', true, {
                    newBalance: this.balanceElementPopup.value
                });

                if (result.response && result.response.balance && !result.error && !result.response.error) {
                    console.log('Баланс успешно обновился');
                    this.balanceElement.innerText = result.response.balance;
                    // Перезаписываем this.balance, для того, чтобы постоянно не отправлялся PUT запрос, даже если баланс не изменялся
                    this.balance = result.response.balance;
                }

                if (result.response && result.error || (result.response && result.response.error)) {
                    console.log('Баланс не получилось обновить, попробуйте позже');
                }
            }

            this.balancePopupWindow.style.display = 'none';
        }
    }

}