import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Person } from "../../models/Person";

@Injectable()
export class DataService {
    private persons: Person[];

    constructor(private http: Http) {
        this.getAllPersons();
    }

    getPerson(id: number | string) {
        return Promise.resolve(this.persons)
            .then(persons => persons.find(p => p.id == id))
    }

    getAllPersons() {
        this.http.get("https://mcsc-supporting-api.azurewebsites.net/api/profiles")
            .map(r => r.json())
            .subscribe(
                p => this.persons = JSON.parse(p),
                err => {
                    console.log("Get persons error");
                }
            );
    }
}