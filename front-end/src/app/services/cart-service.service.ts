import { Injectable } from '@angular/core';
import {CartOrder} from '../model/cart-order';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  orders: CartOrder[] = [];
  totalOrders: Subject<number> = new Subject<number>()
  totalPrice: Subject<number> = new Subject<number>();
  // totalOrders: number = 0;
  // totalPrice: number = 0;
  constructor() { }

  addOrderToCart(order: CartOrder){
    let isExist: boolean = false;
    let existOrder: CartOrder= undefined;
    if(this.orders.length > 0){
      // for(let temp of this.orders){
      //   if(temp.id === order.id){
      //     existOrder = temp;
      //     break;
      //   }
      // }
      existOrder = this.orders.find(temp => temp.id === order.id);
    }
    isExist = (existOrder != undefined); // true
    if(isExist){
      existOrder.quantity++;
    }else{
      this.orders.push(order);
    }
    this.calculatorTotals();
  }
  calculatorTotals(){
    let totalElementsSizeOrder: number = 0;
    let totalPriceOrders: number =  0;
    for(let temp of this.orders){
      totalElementsSizeOrder += temp.quantity;
      totalPriceOrders += temp.quantity * temp.price;
    }
    this.totalOrders.next(totalElementsSizeOrder);
    this.totalPrice.next(totalPriceOrders);
    console.log(this.totalOrders);
    console.log(this.totalPrice);
  }

  decrementOrder(order: CartOrder){
    order.quantity--;
    if(order.quantity === 0){
      this.removeOrder(order);
    }else {
      this.calculatorTotals();
    }
  }


   removeOrder(order: CartOrder) {
    const index = this.orders.findIndex(temp => temp.id === order.id); // index or -1
    if(index > -1){
      this.orders.splice(index, 1);
      this.calculatorTotals();
    }
  }
}
