import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Person } from "../../models/Person";

@Injectable()
export class DataService {
    persons: Person[];

    constructor(private http: Http) {
        this.http
            // .get("https://mscs-cf-functions.azurewebsites.net/api/profiles")
            .get("assets/mock-data/profiles.json")
            .map(r => r.json())
            .subscribe(p => this.persons = p, console.log);
    }

}