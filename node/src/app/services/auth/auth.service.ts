import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
/// import '../../../node_modules/msal/out/msal';
/// <reference path="../../../node_modules/msal/out/msal.d.ts" />

declare var Msal: any;

@Injectable()
export class AuthService {

    private applicationConfig: 
    any = {
        clientID: '3290823d-3c12-4b48-8462-c590e393de66',
        graphScopes: ['user.read']
    };
    private client: any;
    authenticated:boolean = true;

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
        return this.client.loginPopup(this.applicationConfig.graphScopes)
            .then(idToken => {
                const user = this.client.getUser();
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }, () => {
                return null;
            });
    }

    logout() {
        this.client.logout();
        this.authenticated = false;
    }
    
    public getToken() {
        return this.client.acquireTokenSilent(this.applicationConfig.graphScopes)
            .then(accessToken => {
                return accessToken;
            }, error => {
                return this.client.acquireTokenPopup(this.applicationConfig.graphScopes)
                    .then(accessToken => {
                        return accessToken;
                    }, err => {
                        console.error(err);
                    });
            });
    }
}