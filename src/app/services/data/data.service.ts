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
        console.log("Make it to send shit");
        
        console.log("Email: "+email);
        /*
        console.log("Person Id: "+personId);
        // What to do with the response???
        this.http.put("https://mcsc-supporting-api.azurewebsites.net/api/invite",
        {
            'email' : email,
            'id' : id
        });*/
        
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