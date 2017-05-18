import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Person } from "../../models/Person";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
    public persons: Person[] = [];

    constructor(private http: Http) {
        this.getPersons();
    }


    sendEmailInvite(email: string, personId : string)
    {
        if (email != null)
        {
            console.log("Make it to send shit");
            console.log("Email: "+email);
            console.log("Person Id: "+personId);
            // What to do with the response
            var response = this.http.post("https://mscs-cf-functions.azurewebsites.net/api/notify_police?code=9hDa/Q8w5UX69H3WaxQPR5jdGOEok6Vub2PIbKpEHawJda19TfqIeg==",
            {
                'email' : email,
                'userId' : personId
            })
            .map(response => response.json())
            .toPromise()
            .then(res => {
                console.log(res);
                return res;
            });
        }
        else
        {
            console.log("Couldn't send anything. Email was null!")
        }
    }

    verifyToken (url: string) : boolean
    {
        // Parse out the token
        console.log("URL: " + url)

        var token = ""; 
        // Parse out the profile ID
        var id ="";

        
        console.log("Token: " + token + " Profile Id: "+ id);

        // Check to make sure the token and id match!
        // Make some call to a dataservice....

            this.http.post("https://mscs-cf-functions.azurewebsites.net/api/validatetoken",
            {
                'token' : token,
                'userId' : id
            })
            .map(response => response.json())
            .toPromise()
            .then(res => {
                console.log(res);
                return res;
            });
        /*var requestUrl = "https://mcsc-supporting-api.azurewebsites.net/api/verify?access_token="+token+"&"+"id="id;
        this.http.get(requestUrl)
        .map(response => JSON.parse(response.json()));*/

        /*
        */
        return true;
    }

    getPerson(id: number | string) {
        // TODO: Change this to use the endpoint
        return this.getPersons().then(pp => pp.find(p => p.id == id));
       /* var user;
        var response = this.http.get("https://mcsc-supporting-api.azurewebsites.net/api/profiles/{id}")
             .map(response => response.json())
            .toPromise()
            .then(x => {
                console.log(x);
                 user = x;
            });
            return user;*/
        }

    getPersons() {
        let that = this;
        //use these two lines instead of the next two to pull from the api
         return this.http.get("https://mcsc-supporting-api.azurewebsites.net/api/profiles")
             .map(response => response.json())
        /*return this.http.get("/assets/mock-data/persons.json")
            .map(response => response.json())*/
            .toPromise()
            .then(fetchedPersons => {
                console.log(fetchedPersons);
                that.persons = fetchedPersons;
                return that.persons;
            });
    }
}