import { Component, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { AppConfig } from '../app.config';
import { DataService } from "../services/data/data.service";
import { AuthService } from "../services/auth/auth.service";
import { Router } from '@angular/router';

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

  constructor(config: AppConfig, private dataService: DataService, private authService: AuthService, private router: Router) {
    this.config = config.getConfig();
    // authService.login().then(user => console.log(user.name));

  }

  ngOnInit(): void {
    let now = new Date();
    this.month = now.getMonth() + 1;
    this.year = now.getFullYear();
  }

  selectPerson(id: number): void {
    this.router.navigate(['/app/person/', id]);
  }

}
