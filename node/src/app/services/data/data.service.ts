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

    getPerson(id: number | string) {
        return this.getPersons().then(pp => pp.find(p => p.id == id));
    }

    getPersons() {
        let that = this;
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