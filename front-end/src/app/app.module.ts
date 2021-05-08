import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import {RouterModule, Routes} from '@angular/router';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { SearchOrderComponent } from './components/search-order/search-order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import {PurchasesComponent} from './components/purchases/purchases.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {HttpIntercepterBaseAuthService} from './services/security/http-intercepter-base-auth.service';
import {RouteActivatedService} from './services/activated/route-activated.service';
import {LoginActivateService} from './services/activated/login-activate.service';
import {CookieService} from 'ngx-cookie-service';
//http://localhost:4200/
const routes: Routes = [
  //http://localhost:4200/category
  { path: 'category', component: OrderItemsComponent, canActivate: [RouteActivatedService] },

  //http://localhost:4200/category/{id}
  { path: 'category/:id', component: OrderItemsComponent, canActivate: [RouteActivatedService] },

  //http://localhost:4200/orders
  { path: 'orders', component: OrderItemsComponent, canActivate: [RouteActivatedService] },

  //http://localhost:4200/orders/keyname
  { path: 'orders/:keyname', component: OrderItemsComponent, canActivate: [RouteActivatedService] },

  //http://localhost:4200/order/{id}
  { path: 'order/:id', component: OrderDetailsComponent, canActivate: [RouteActivatedService] },

  //http://localhost:4200/purchases
  { path: 'purchases', component: PurchasesComponent, canActivate: [RouteActivatedService]},

  //http://localhost:4200/checkout
  { path: 'checkout', component:  CheckOutComponent, canActivate: [RouteActivatedService] },

  //http://localhost:4200/login
  { path: 'login', component: LoginComponent, canActivate: [LoginActivateService]},

  //http://localhost:4200/signup
  { path: 'signup', component: SignupComponent, canActivate: [LoginActivateService] },

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
    OrderDetailsComponent,
    CartStatusComponent,
    PurchasesComponent,
    CheckOutComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBaseAuthService, multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
