import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { DataService } from '../services/data/data.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService, private dateService: DataService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // Check if they are logged in! If they are move on. If not check if they are trying to get to the limited access page
        console.log("Auth Guard: "+ state.url);
        if (this.authService.authenticated) 
        {
            console.log("Successfully logged in!");
            return true;
        }
        if (state.url.includes("person") && state.url.includes("token")) 
        {
            if (this.dateService.verifyToken(state.url))
            {
                console.log("Access token succeeded");
                return true;
            }
            else
            {
                console.log("Access token failed");
                this.router.navigate(['/login']);
                return false;
            }

        }
        console.log("Not logged in. Redirect.");
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}