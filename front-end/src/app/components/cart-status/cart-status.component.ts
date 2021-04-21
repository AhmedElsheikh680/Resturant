import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  orderSize: number = 0;
  orderPrice: number = 0;
  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.getCartStatus()
  }
  getCartStatus(){
    this.orderSize = this.cartService.totalOrders;
    this.orderPrice = this.cartService.totalPrice;
  }

}
