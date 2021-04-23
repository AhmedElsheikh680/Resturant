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
  totalOrder: number = 0;
  totalPrice: number=0;
  constructor(private casrtService: CartServiceService) { }

  ngOnInit(): void {
    this.getAllPuchasesOrders();
    this.getTotals();
    this.casrtService.calculatorTotals();
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
  getTotals(){
    this.casrtService.totalOrders.subscribe(
      data => {
        this.totalOrder = data
      }
    )
    this.casrtService.totalPrice.subscribe(
      data => {
        this.totalPrice = data
      }
    )

  }
}
