import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../model/order';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private baseUrl =`http://localhost:8080/api/v1`;

  constructor(private httpClient: HttpClient) { }

  getOrders(page, size): Observable<Order[]> {
    // let header = new HttpHeaders({
    //   Authorization: sessionStorage.getItem('token').toString()
    // })
    return this.httpClient.get<Order[]>(this.baseUrl+`/orders?page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getOrdersByCategoryId(id, page, size):Observable<Order[]>{
      return this.httpClient.get<Order[]>(this.baseUrl+`/category/${id}?page=${page}&size=${size}`).pipe(
        map(
          response => response
        )
      )
  }

  getOrdersByKeyName(keyName, page, size):Observable<Order[]>{
    return  this.httpClient.get<Order[]>(this.baseUrl+`/orderkey/${keyName}?page=${page}&size=${size}`);
  }

  getOrderById(id): Observable<Order>{
    return  this.httpClient.get<Order>(this.baseUrl+`/order/${id}`).pipe(
      map(
        response => response
      )
    )
  }

  getOrdersSize():Observable<number>{
    return this.httpClient.get<number>(this.baseUrl+`/ordersSize`).pipe(
      map(
        response => response
      )
    )
  }

  getOrdersSizeByCategoryId(id):Observable<number>{
    return this.httpClient.get<number>(this.baseUrl+`/categoryIdSize/${id}`).pipe(
      map(
        response => response
      )
    )
  }

  getOrdersSizeByKeyName(name): Observable<number>
  {
    return this.httpClient.get<number>(this.baseUrl+`/ordersSizeKeyName/${name}`).pipe(
      map(
        response => response
      )
    )
  }
















}
