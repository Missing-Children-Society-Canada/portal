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
  public user: any = null;
    public userInfo: any = null;
    public apiCallFailed: boolean;
    public loginFailed: boolean;
  config: any;
  month: any;
  year: any;

  constructor(config: AppConfig, private dataService: DataService, private authService: AuthService) {
    this.config = config.getConfig();
    // authService.login().then(user => console.log(user.name));
    
  }
  public login() {
        this.loginFailed = false;
        this.authService.login()
            .then(user => {
                if (user) {
                    this.user = user;
                } else {
                    this.loginFailed = true;
                }
            }, () => {
                this.loginFailed = true;
            });
    }

    private logout() {
        this.authService.logout
    }

  ngOnInit(): void {
    let now = new Date();
    this.month = now.getMonth() + 1;
    this.year = now.getFullYear();
  }

}
