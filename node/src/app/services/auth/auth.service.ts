import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

declare var Msal: any;

@Injectable()
export class AuthService {
    client;
    authenticated:boolean = false;

    public user = { };
    constructor(private http: Http) {
        this.client = new Msal.UserAgentApplication('3290823d-3c12-4b48-8462-c590e393de66', null, (errorDesc, token, error, tokenType) => {
            if (token) { }
            else {
                console.log(error + ":" + errorDesc);
            }
        });
        console.log('this.client: ' + this.client);
    }

    login() {
        return this.client.loginPopup().then(idToken => {
            this.user = this.client.getUser();
            this.authenticated = true;
            return this.user;
        });
    }

    logout() {
        this.client.logout();
        this.authenticated = false;
    }

}