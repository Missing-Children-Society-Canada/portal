import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    getPersons() {
        return [
            {
                name:"Anthony Bartolo",
                date:"May 11, 2017",
                time:"4:23 PM"
            },
            {
                name:"Jef King",
                date:"May 11, 2017",
                time:"10:52 AM"
            },
            {
                name:"Jeremy Foster",
                date:"May 10, 2017",
                time:"7:26 PM"
            }
        ]
    }
}