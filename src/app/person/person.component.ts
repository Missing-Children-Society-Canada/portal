import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from "../services/data/data.service";

import { AuthService } from "../services/auth/auth.service";
import { Person } from "../models/Person";

@Component({
  selector: '[person]',
  templateUrl: './person.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./person.style.scss']
})
export class PersonComponent implements OnInit {
  person = {};

  emailTo: String;
  emailSent: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    let that = this;
    this.route.params.subscribe(params => {
      that.dataService.getPerson(params.id).then(fetchedPerson => {
        that.person = fetchedPerson;
      });
    });
  }

  sendEmail(email : string, id : string)
  {
    if (email != null)
    {
      this.dataService.sendEmailInvite(email, id);
      this.emailSent = true;
    }
    else
    {
      this.emailSent = false;
    }
    
  }

}
