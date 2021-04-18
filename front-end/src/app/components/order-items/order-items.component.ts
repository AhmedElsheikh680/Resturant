import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../../services/order-service.service';
import {Order} from '../../model/order';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  orders: Order[]  = [];
  constructor(private orderService: OrderServiceService) { }

  ngOnInit(): void {
  }
  getOrders(){
    this.orderService.getOrders().subscribe(
      data => {
        this.orders = data
      }
    )
  }

}
