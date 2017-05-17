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


    sendOutEmailInvite(email: string, id : string)
    {
        // What to do with the response???
        this.http.put("https://mcsc-supporting-api.azurewebsites.net/api/invite",
        {
            'email' : email,
            'id' : id
        });
        
    }

    verifyToken (url: string) : boolean
    {
        // Parse out the token
        console.log("URL: " + url)

        var token = ""; 
        // Parse out the profile ID
        var id = "";
        
        console.log("Token: " + token + " Profile Id: "+ id);

        // Check to make sure the token and id match!
        // Make some call to a dataservice....
        this.http.get("https://mcsc-supporting-api.azurewebsites.net/api/verify?access_token={token}&id={id}")
        .map(response => JSON.parse(response.json()));

        /*
        */
        return true;
    }

    getPerson(id: number | string) {
        return this.getPersons().then(pp => pp.find(p => p.id == id));
    }

    getPersons() {
        let that = this;
        //use these two lines instead of the next two to pull from the api
        // return this.http.get("https://mcsc-supporting-api.azurewebsites.net/api/profiles")
        //     .map(response => JSON.parse(response.json()))
        return this.http.get("/assets/mock-data/persons.json")
            .map(response => response.json())
            .toPromise()
            .then(fetchedPersons => {
                that.persons = fetchedPersons;
                return that.persons;
            });
    }
}