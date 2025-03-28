import config from "../../config/config";
import {AuthUtils} from "./auth-utils";


export class HttpUtils {
    static async request(url, method = "GET", body = null) {
        const result = {
            error: false,
            response: null
        }
        const params = {
            method: method,
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },
        };
        let token = localStorage.getItem(AuthUtils.accessTokenKey);
        if(token){
            params.headers['x-access-token'] = token;
        }

        if (body) {
            params.body = JSON.stringify(body)
        }
        let response = null;
        try {
            response = await fetch(config.api + url, params);
            result.response = await response.json();
        } catch (e) {
            result.error = true;
            return result;
        }

        if (response.status < 200 || response.status >= 300) {
            if(response.status === 401){
                const result = await AuthUtils.processUnauthorizedResponse();
                if (result){
                    return await this.request(url, method, body);
                }else{
                    return null;
                }
            }
            result.error = true;
        }
        return result;
    }
}