export class AuthUtils {
    static tokensKey = 'tokens';
    static userKey = 'user';

    static setTokens(tokens) {
        localStorage.setItem(this.tokensKey, JSON.stringify((tokens)));
    }

    static setUser(user){
        localStorage.setItem(this.userKey, JSON.stringify((user)));
    }

    static removeAuthInfo() {
        localStorage.removeItem(this.tokensKey);
        localStorage.removeItem(this.userKey);
    }

    static getAuthInfo(key = null) {
        if(key && [this.userKey, this.tokensKey].includes(key)){
            return localStorage.getItem(key);
        }else{
            return{
                [this.tokensKey]: localStorage.getItem((this.tokensKey)),
                [this.userKey]: localStorage.getItem((this.userKey)),
            }
        }
    }
}