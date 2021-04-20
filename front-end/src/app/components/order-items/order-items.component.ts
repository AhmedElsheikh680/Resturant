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
    this.route.paramMap.subscribe(
      () => {
        this.finshOrders();
      }
    )


  }
  finshOrders(){
    let result1 = this.route.snapshot.paramMap.has('id');
    let result2 = this.route.snapshot.paramMap.has('keyname');
    if(result1){
      this.getOrdersByCategoryId();
    }else if(result2){
      this.getOrdersBySearchName();
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
        this.orders = data;
      }
    )
  }

  private getOrdersBySearchName() {
    let keyName = this.route.snapshot.paramMap.get('keyname');

    this.orderService.getOrdersByKeyName(keyName).subscribe(
      data => {
        this.orders = data
      }
    )
  }
}
