import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Person } from "../../models/Person";

@Injectable()
export class DataService {
    public persons: Person[] = [];

    constructor(private http: Http) {
        this.getPersons().subscribe(p => this.persons = JSON.parse(p));
        console.log('data service constructor called');
    }

    getPerson(id: number | string) {
        return this.getPersons().filter(p => p.id === id);
    }

    getPersons() {
        return this.http.get("https://mcsc-supporting-api.azurewebsites.net/api/profiles")
            .map(r => r.json());
    }
}