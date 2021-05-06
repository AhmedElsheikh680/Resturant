import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../services/cart-service.service';
import {AuthenticationServiceService} from '../../services/security/authentication-service.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  orderSize: number = 0;
  orderPrice: number = 0;
  constructor(private cartService: CartServiceService,
              private authenticationService: AuthenticationServiceService) { }

  ngOnInit(): void {
    this.getCartStatus()
  }
  getCartStatus(){
    this.cartService.totalOrders.subscribe(
      data => {
        this.orderSize = data;
      }
    )
    this.cartService.totalPrice.subscribe(
      data => {
        this.orderPrice = data
      }
    )
  }
  isUserLogin(){
    return this.authenticationService.isLogin();
  }

}
