import { Component, OnInit } from '@angular/core';
import {CartOrder} from '../../model/cart-order';
import {CartServiceService} from '../../services/cart-service.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  orders: CartOrder[] = [];
  constructor(private casrtService: CartServiceService) { }

  ngOnInit(): void {
    this.getAllPuchasesOrders();
  }
  getAllPuchasesOrders(){
    this.orders = this.casrtService.orders;
  }

  incrementOrder(temp: CartOrder) {
    this.casrtService.addOrderToCart(temp);
  }

  decrementOrder(temp: CartOrder) {
    this.casrtService.decrementOrder(temp);
  }

  removeOrder(temp: CartOrder) {
    this.casrtService.removeOrder(temp);
  }
}
