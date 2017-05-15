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

    getPerson(id:number|string) {
        return Promise.resolve(this.persons)
            .then(persons => persons.find(p => p.id == id))
    }

    getAllPersons() {
        // this.http.get("https://mcsc-supporting-api.azurewebsites.net/api/profiles")
        this.http.get("/assets/mock-data/persons.json")
            .subscribe((response: Response) => {
                this.persons = response.json();
            },

            (error: Response) => {
                console.log("Get persons Error");
            });
    }
}