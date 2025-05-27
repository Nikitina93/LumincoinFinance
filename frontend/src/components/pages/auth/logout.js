import {AuthUtils} from "../../../utils/auth-utils";
import {HttpUtils} from "../../../utils/http-utils";

export class Logout {
    constructor(openNewRoute) {
        this.openNewRoute = openNewRoute;

        this.logout().then();
    }

    async logout() {


        const result = await HttpUtils.request('/logout', 'POST', false, {
            refreshToken: AuthUtils.getUserInfo(AuthUtils.refreshTokenKey)
        });

        if (result && !result.error) {
            AuthUtils.removeUserInfo();
            return this.openNewRoute('/login');
        }
    }

}