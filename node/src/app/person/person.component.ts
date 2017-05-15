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
  person: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.dataService.getPerson(+params['id']))
      .subscribe((person: Person) => this.person = person);
  }

}
