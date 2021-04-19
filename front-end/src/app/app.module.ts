import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import {RouterModule, Routes} from '@angular/router';


//http://localhost:4200/
const routes:Routes = [
  //http://localhost:4200/category
   { path: 'category', component: OrderItemsComponent},
  //http://localhost:4200/orders
  { path:'orders', component: OrderItemsComponent},
  //http://localhost:4200/
  { path: '', redirectTo:'/orders', pathMatch: 'full'},
  //http://localhost:4200/fklkfdfkl
  { path: '**', redirectTo: '/orders', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent
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
