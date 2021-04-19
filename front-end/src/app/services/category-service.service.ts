import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private baseUrl = `http://localhost:8080/api/v1/categories`;

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<Category[]>{
    return  this.httpClient.get<Category[]>(this.baseUrl).pipe(
      map(
        response => response
      )
    )
  }
}
