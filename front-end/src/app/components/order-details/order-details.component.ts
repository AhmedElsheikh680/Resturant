import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../../services/order-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../model/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: Order = null;
  constructor(private orderService: OrderServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getOrderById();
  }
  getOrderById(){
    let orderId= this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(orderId).subscribe(
      data => {
        this.order = data
      }
    )
  }

  allOrders() {
    this.router.navigateByUrl('/orders');
  }
}
