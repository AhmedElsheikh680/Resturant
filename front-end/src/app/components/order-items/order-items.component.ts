import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../../services/order-service.service';
import {Order} from '../../model/order';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  orders: Order[]  = [];
  constructor(private orderService: OrderServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.finishOrders();
  }
  finishOrders(){
    let result = this.route.snapshot.paramMap.has('id');
    if(result){
      this.getOrdersByCategoryId();
    }else {
      this.getOrders()

    }
  }
  getOrders(){
    this.orderService.getOrders().subscribe(
      data => {
        this.orders = data
      }
    )
  }
  getOrdersByCategoryId(){
    let categoryId = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrdersByCategoryId(categoryId).subscribe(
      data => {
        this.orders = data
      }
    )
  }

}
