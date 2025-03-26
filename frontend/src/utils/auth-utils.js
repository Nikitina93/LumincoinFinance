import config from "../../config/config";

export class AuthUtils {
    static accessTokenKey = 'accessToken';
    static refreshTokenKey = 'refreshToken';
    static userKey = 'user';


    static async processUnauthorizedResponse() {
        const refreshToken = localStorage.getItem(this.refreshTokenKey);
        if (refreshToken) {
            const response = await fetch(config.api + '/refresh', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({refreshToken: refreshToken})
            });

            if (response && response.status === 200) {
                const result = await response.json();
                if (result && !result.error) {
                    this.setTokens(result.accessToken, result.refreshToken);
                    return true;
                }
            }
        }
        this.removeAuthInfo();
        // location.href = '/login';

        return false;
    }

    static setTokens(accessToken, refreshToken) {
        localStorage.setItem(this.accessTokenKey, JSON.stringify((accessToken)));
        localStorage.setItem(this.refreshTokenKey, JSON.stringify((refreshToken)));
    }

    static setUser(user) {
        localStorage.setItem(this.userKey, JSON.stringify((user)));
    }

    static getUserInfo(){
        const userInfo = localStorage.getItem(this.userKey);
        if(userInfo){
            return JSON.parse(userInfo);
        }
        return null;
    }

    static removeAuthInfo() {
        localStorage.removeItem(this.refreshTokenKey);
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.userKey);
    }

    static getAuthInfo(key = null) {
        if (key && [this.userKey, this.accessTokenKey, this.refreshTokenKey].includes(key)) {
            return localStorage.getItem(key);
        } else {
            return {
                [this.accessTokenKey]: localStorage.getItem((this.accessTokenKey)),
                [this.refreshTokenKey]: localStorage.getItem((this.refreshTokenKey)),
                [this.userKey]: localStorage.getItem((this.userKey)),
            }
        }
    }


}