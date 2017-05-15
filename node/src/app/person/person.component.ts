import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from "../services/data/data.service";
import { Person } from "../models/Person";

@Component({
  selector: '[person]',
  templateUrl: './person.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./person.style.scss']
})
export class PersonComponent implements OnInit {
  person = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    // let x = this.dataService.getPerson(3);
    let ds = this.dataService;
    this.route.params.subscribe(params => {
      let person = ds.persons.find(person => {
        return person.id == params.id
      });
    });
    // this.route.params
    //   .switchMap((params: Params, i:number) => {
    //     return this.dataService.getPerson(+params['id'])
    //   })
    //   .subscribe((person: Person) => {
    //     return this.person = person
    //   });
  }

}
