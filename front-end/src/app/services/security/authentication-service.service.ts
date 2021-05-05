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

  executeAuthentication(email, password): Observable<any>{

    return this.httpClient.post<any>(this.baseUrl+`/signin`, { email, password}).pipe(
      map(
        response => {
          return response
        }
      )
    )
  }
}
