import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CartServiceService} from '../cart-service.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private baseUrl = `http://localhost:8080`;

  constructor(private httpClient: HttpClient,
              private cartStatus: CartServiceService,
              private cookie: CookieService) { }

  //login
  executeAuthentication(email, password): Observable<any>{

    return this.httpClient.post<any>(this.baseUrl+`/signin`, { email, password}).pipe(
      map(
        response => {
          sessionStorage.setItem("email", response.email);
          sessionStorage.setItem("token",   `Bearer ${response.token}`);
          this.cookie.set("email", response.email);
          this.cookie.set("token", `Bearer ${response.token}`);
          return response
        }
      )
    )
  }

  //signup
  createAccountUser(email, password): Observable<any>{
    return  this.httpClient.post<any>(this.baseUrl+`/signup`, { email, password}).pipe(map(
      response => {
        return response
      }
    ))
  }

  getAuthentication(){
    return sessionStorage.getItem("email")
  }
     getToken(){
    if(this.getAuthentication()){
      return sessionStorage.getItem("token")
    }
  }

  isLogin(){
    return !(sessionStorage.getItem("email") == null
            || sessionStorage.getItem("token") == null)
  }
  logout(){
    this.cartStatus.orders = [];
    this.cartStatus.totalOrders.next(0);
    this.cartStatus.totalPrice.next(0);
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
    this.cookie.delete("email");
    this.cookie.delete("token");
  }


}
