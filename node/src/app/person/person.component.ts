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
    let that = this;
    this.route.params.subscribe(params => {
      that.dataService.getPerson(params.id).then(fetchedPerson => {
        that.person = fetchedPerson;
      });
    });
  }

}
