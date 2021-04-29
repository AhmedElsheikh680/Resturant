import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PurchaseRequest} from '../model/purchase-request';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseServiceService {

  private baseUrl=`http://localhost:8080/api/v1/buy/purchase`;

  constructor(private httpClient: HttpClient) { }

  saveOrder(purchaseRequest: PurchaseRequest): Observable<any>{
    return this.httpClient.post<PurchaseRequest>(this.baseUrl, purchaseRequest);
  }
}
