import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.authenticated) {
            // logged in so return true
            console.log("Trying to redirect!");
            return true;
            
        }
        console.log("Trying to redirect!");
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}