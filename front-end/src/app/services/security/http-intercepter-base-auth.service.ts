import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationServiceService} from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBaseAuthService implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.authenticationService.getAuthentication() && this.authenticationService.getToken()){
      req = req.clone( {
        setHeaders: {
          Authorization: this.authenticationService.getToken()
        }
      })
    }
    return next.handle(req);
  }
}
