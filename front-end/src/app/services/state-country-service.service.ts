import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../model/country';
import {map} from 'rxjs/operators';
import {State} from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class StateCountryServiceService {

  private baseUrl=`http://localhost:8080/api/v1`;

  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.baseUrl+`/countries`).pipe(
      map(
        response => response
      )
    )
  }

  getAllStates(): Observable<State[]>{
    return this.httpClient.get<State[]>(this.baseUrl+`/states`).pipe(
      map(
        response => response
      )
    )
  }

  getStatesByCountryCode(code): Observable<State []>{
    return this.httpClient.get<State[]>(this.baseUrl+ `/statesByCountryCode/${code}`).pipe(
      map(
        response => response
      )
    )
  }
}
