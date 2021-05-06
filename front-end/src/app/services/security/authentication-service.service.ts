import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private baseUrl = `http://localhost:8080`;

  constructor(private httpClient: HttpClient) { }

  //login
  executeAuthentication(email, password): Observable<any>{

    return this.httpClient.post<any>(this.baseUrl+`/signin`, { email, password}).pipe(
      map(
        response => {
          sessionStorage.setItem("email", response.email);
          sessionStorage.setItem("token",   `Bearer ${response.token}`);
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
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
  }

}
