import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationServiceService} from '../security/authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivatedService implements CanActivate{

  constructor(private authenticationService: AuthenticationServiceService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authenticationService.isLogin()){
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
