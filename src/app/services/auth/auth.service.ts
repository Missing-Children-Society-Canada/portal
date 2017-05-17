import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
/// import '../../../node_modules/msal/out/msal';
/// <reference path="../../../node_modules/msal/out/msal.d.ts" />

declare var Msal: any;

@Injectable()
export class AuthService {
    client: any;
    authenticated:boolean = false;
    public user : any = {};

    constructor(private http: Http) {
        this.client = new Msal.UserAgentApplication('8c2ebb64-2b44-4215-a86a-c50db07b0ecc', 'https://login.microsoftonline.com/6044a321-e0b8-4797-8651-e2722761fad9'
        , (errorDesc, token, error, tokenType) => {
            if (token) {
                 console.log("Heck yeah got a token");
             }
            else {
                console.log(error + ":" + errorDesc);
            }
        });
    }

checkOneTimeAccessToken(url: string) :boolean
{
    // Parse out the token
    console.log("URL: " + url)

    var token = ""; 
    // Parse out the profile ID
    var profileId = "";
    
    console.log("Token: " + token + " Profile Id: "+ profileId);

    // Check to make sure the token and id match!
    // Make some call to a dataservice....
    
    return true;

}

    login() {
        return this.client.loginPopup()
            .then(idToken => {
                 this.user = this.client.getUser();
                if (this.user) {
                    console.log("Authenticated successfully!")
                    this.authenticated = true;
                    return this.user;
                } else {
                     console.log("Not authenticated :(")
                    this.authenticated = false;
                    return null;
                }
            }, () => {
                 console.log("Not authenticated :(")
                this.authenticated = false;
                return null;
            });
    }

    logout() {
        this.client.logout();
        this.authenticated = false;
    }
    
    getToken() {
        return this.client.acquireTokenSilent()
            .then(accessToken => {
                return accessToken;
            }, error => {
                return this.client.acquireTokenPopup()
                    .then(accessToken => {
                        return accessToken;
                    }, err => {
                        console.error(err);
                    });
            });
    }
}