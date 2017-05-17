import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: '[profile]',
  templateUrl: './profile.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile.style.scss']
})
export class ProfileComponent {
  constructor(private authService: AuthService) { }
}
