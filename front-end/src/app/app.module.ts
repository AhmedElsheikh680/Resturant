import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import {RouterModule, Routes} from '@angular/router';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { SearchOrderComponent } from './components/search-order/search-order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
//http://localhost:4200/
const routes: Routes = [
  //http://localhost:4200/category
  { path: 'category', component: OrderItemsComponent },
  //http://localhost:4200/category/{id}
  { path: 'category/:id', component: OrderItemsComponent },
  //http://localhost:4200/orders
  { path: 'orders', component: OrderItemsComponent },
  //http://localhost:4200/orders/keyname
  { path: 'orders/:keyname', component: OrderItemsComponent },
  //http://localhost:4200/order/{id}
  { path: 'order/:id', component: OrderDetailsComponent },
  //http://localhost:4200/
  { path: '', redirectTo: '/orders', pathMatch: 'full'},
  //http://localhost:4200/jdsj,mds
  { path: '**', redirectTo: '/orders', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent,
    DropdownMenuComponent,
    SearchOrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
