import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../../services/order-service.service';
import {Order} from '../../model/order';
import {Router} from '@angular/router';
import {AuthenticationServiceService} from '../../services/security/authentication-service.service';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {
  orders: Order[] =[];
  constructor(private orderService: OrderServiceService,
              private router: Router,
              private authenticationService: AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  doSearch(value: string) {
    this.router.navigateByUrl('/orders/'+value);
  }

  isAuthenticatedUser(){
    return this.authenticationService.isLogin();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl("/login");
  }
}
