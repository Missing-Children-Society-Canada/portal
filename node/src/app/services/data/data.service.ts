import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Person } from "../../models/Person";

@Injectable()
export class DataService {
    private profiles: Person[] =
    [
        {
            "id":"122",
            "firstname":"Bart",
            "lastname": "Simpson",
            "image":"http://www.simpsoncrazy.com/content/pictures/bart/BartSimpson13.gif",
            "datetime": "TBD"
        },
        {
            "id":"123",
            "firstname":"Morty",
            "lastname": "",
            "image":"http://i3.kym-cdn.com/photos/images/newsfeed/000/692/145/49c.png",
            "datetime": "I DUNNO??"
        },
        {
            "id":"124",
            "firstname":"Ashley",
            "lastname": "Spinelli",
            "image":"",
            "datetime": "Good Question...."
        }
]
    constructor(private http: Http) {
        this.getAllProfiles();
    }
    
    getAllProfiles() {
        // TODO: FIX THIS STUPID CALL WHY IS IT BROKEN?????????
        /*
             this.http.get("https://mcsc-supporting-api.azurewebsites.net/api/profiles")
                .subscribe((response: Response) => {
                    this.profiles = response.json();
                },

                (error: Response) => {
                    console.log("Get Profiles Error");
                });*/    }
}