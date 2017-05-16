import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: 'login',
  styleUrls: [ './login.style.scss' ],
  templateUrl: './login.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'login-page app'
  }
})
export class Login {
  constructor(private authService: AuthService) {

  }
}
