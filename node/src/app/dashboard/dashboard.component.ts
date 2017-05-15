import { Component, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { AppConfig } from '../app.config';
import { DataService } from "../services/data/data.service";
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Dashboard {
  config: any;
  month: any;
  year: any;
  selected: boolean = false;
  selectedId: string;

  constructor(config: AppConfig, private dataService: DataService, private authService: AuthService) {
    this.config = config.getConfig();
    // authService.login().then(user => console.log(user.name));
    
  }

  ngOnInit(): void {
    let now = new Date();
    this.month = now.getMonth() + 1;
    this.year = now.getFullYear();
  }

  selectPerson()
  {
    var id = "";
    console.log("In on selected!");
    this.selectedId = id;
    this.selected = true;
    console.log("Child Selected"+ id);

  }

}
