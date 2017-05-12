import { Component, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { AppConfig } from '../app.config';
import { DataService } from "../services/data/data.service";

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

  constructor(config: AppConfig, private dataService: DataService) {
    this.config = config.getConfig();
  }

  ngOnInit(): void {
    let now = new Date();
    this.month = now.getMonth() + 1;
    this.year = now.getFullYear();
  }

}
