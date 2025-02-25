import {AuthUtils} from "../../../utils/auth-utils";
import {HttpUtils} from "../../../utils/http-utils";

export class Logout {
    constructor(openNewRoute) {

        this.openNewRoute = openNewRoute;


        if (!AuthUtils.getAuthInfo(AuthUtils.userKey) || !AuthUtils.getAuthInfo(AuthUtils.tokensKey)) {
            return this.openNewRoute('/login');
        }

        this.logout().then();
    }

    async logout() {
        await HttpUtils.request('/logout', 'POST',{
            tokens: AuthUtils.getAuthInfo(AuthUtils.tokensKey),
        });


        AuthUtils.removeAuthInfo();

        this.openNewRoute('/login');
    }


}