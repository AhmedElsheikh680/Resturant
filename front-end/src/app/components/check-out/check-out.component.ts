import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from '../../model/country';
import {State} from '../../model/state';
import {StateCountryServiceService} from '../../services/state-country-service.service';
import {SpaceValidator} from '../../model/space-validator';
import {CartServiceService} from '../../services/cart-service.service';
import {Client} from '../../model/client';
import {Address} from '../../model/address';
import {RequestOrder} from '../../model/request-order';
import {Item} from '../../model/item';
import {CartOrder} from '../../model/cart-order';
import {PurchaseRequest} from '../../model/purchase-request';
import {PurchaseServiceService} from '../../services/purchase-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  checkoutParentGroup: FormGroup;

  countries: Country[] = [];
  statesFromPerson: State[] = [];
  statesToPerson: State[] = [];

  totalSize: number = 0;
  totalPrice: number = 0;
  constructor(private formChildGroup: FormBuilder,
              private stateCountryService:StateCountryServiceService,
              private cartService: CartServiceService,
              private purchaseService: PurchaseServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.myForm();
    this.getAllCountries();
    // this.getAllStates();
    this.getTotals()
  }
  myForm(){
    this.checkoutParentGroup = this.formChildGroup.group({
      data: this.formChildGroup.group({
        fullName: new FormControl('', [
          Validators.required,
          SpaceValidator.onlyContainsSpace,
          Validators.minLength(5)
        ]),
        gmail: new FormControl('', [
          Validators.required,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]*$')
        ])
      }),
      fromPerson: this.formChildGroup.group({
        country: new FormControl('', [
          Validators.required
        ]),
        state: new FormControl('',[
          Validators.required
        ]),
        zipCode: new FormControl('',[
          Validators.required,
          Validators.minLength(2),
          SpaceValidator.onlyContainsSpace
        ])
      }),
      toPerson: this.formChildGroup.group({
        country: new FormControl('', [
          Validators.required
        ]),
        state: new FormControl('', [
          Validators.required
        ]),
        zipCode: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          SpaceValidator.onlyContainsSpace
        ])
      }),
      creditCard: this.formChildGroup.group({
        cardType: new FormControl('',[
          Validators.required
        ]),
        cardNumber: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{16}')
        ]),
        code: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{3}')
        ])
      })
    })
  }
  get fullName(){
    return this.checkoutParentGroup.get('data.fullName')
  }
  get email(){
    return this.checkoutParentGroup.get('data.gmail')
  }
  get phone(){
    return this.checkoutParentGroup.get('data.phone')
  }
  get fromCountry(){
    return this.checkoutParentGroup.get('fromPerson.country')
  }
  get fromState(){
    return this.checkoutParentGroup.get('fromPerson.state')
  }
  get fromZipCode(){
    return this.checkoutParentGroup.get('fromPerson.zipCode')
  }

  get toCountry(){
    return this.checkoutParentGroup.get('toPerson.country')
  }
  get toState(){
    return this.checkoutParentGroup.get('toPerson.state')
  }
  get toZipCode(){
    return this.checkoutParentGroup.get('toPerson.zipCode')
  }
  get cardType(){
    return this.checkoutParentGroup.get('creditCard.cardType')
  }
  get cardNumber(){
    return this.checkoutParentGroup.get('creditCard.cardNumber');
  }
  get code(){
    return this.checkoutParentGroup.get('creditCard.code')
  }
  done() {
    if(this.checkoutParentGroup.invalid){
      this.checkoutParentGroup.markAllAsTouched()
    }else{
      // #1
      let client: Client = new Client();
      client.name = this.checkoutParentGroup.controls['data'].value.fullName;
      client.email = this.checkoutParentGroup.controls['data'].value.gmail;
      client.phoneNumber = this.checkoutParentGroup.controls['data'].value.phone;

      // #2
      let fromAddress: Address = this.checkoutParentGroup.controls['fromPerson'].value;
      fromAddress.state = fromAddress.state['name'];
      let toAddress: Address = this.checkoutParentGroup.controls['toPerson'].value;
      toAddress.state = toAddress.state['name'];

      // #3
      let requestOrder: RequestOrder = new RequestOrder();
      requestOrder.totalQuantity = this.totalSize;
      requestOrder.totalPrice = this.totalPrice;

      // #4
      let items: Item [] = [];
      let cartOrders: CartOrder[] = this.cartService.orders;
      // for(let i=0; i<cartOrders.length; i++){
      //   items[i] = new Item(cartOrders[i]);
      // }
      items = cartOrders.map(order => new Item(order));

      // #5
      let purchaseRequest: PurchaseRequest = new PurchaseRequest();
      purchaseRequest.client = client;
      purchaseRequest.fromAddress = fromAddress;
      purchaseRequest.toAddress = toAddress;
      purchaseRequest.requestOrder = requestOrder;
      purchaseRequest.items = items;

      // #6
      this.purchaseService.saveOrder(purchaseRequest).subscribe({
        next: response => {
          alert("Your Name: "+ response.name + "\n Your Code: "+ response.code);
          this.clean();
        },error: error => {
          console.log("Error "+ error.message)
        }
      })

    }



    // console.log(this.checkoutParentGroup.get('data').value);
    // console.log(this.checkoutParentGroup.get('fromPerson').value);
    // console.log(this.checkoutParentGroup.get('toPerson').value);
    // console.log(this.checkoutParentGroup.get('creditCard').value);
  }
  clean(){
    this.cartService.orders = [];
    this.cartService.totalOrders.next(0);
    this.cartService.totalPrice.next(0);
    this.checkoutParentGroup.reset();
    this.router.navigateByUrl("/orders");

  }

  similarGroup(event: Event) {
    if((<HTMLInputElement>event.target).checked){
      this.checkoutParentGroup.controls.toPerson
        .setValue(this.checkoutParentGroup.controls.fromPerson.value)
      this.statesFromPerson = this.statesToPerson;
    }else {
      this.checkoutParentGroup.controls.toPerson.reset();
    }

  }

  getAllCountries(){
    this.stateCountryService.getAllCountries().subscribe(
      data => {
        this.countries = data;
      }
    )
  }
  getStatesByCategoryCode(typeForm){
    const code = this.checkoutParentGroup.get(`${typeForm}.country`).value;
    this.stateCountryService.getStatesByCountryCode(code).subscribe(
      data => {
        if(typeForm === 'fromPerson'){
          this.statesFromPerson = data;
        }else {
          this.statesToPerson = data;
        }
        this.checkoutParentGroup.get(`${typeForm}.state`).setValue(data[0]);
      }
    )
  }

  // getAllStates(){
  //   this.stateCountryService.getAllStates().subscribe(
  //     data => {
  //       this.states = data;
  //     }
  //   )
  // }

  getTotals(){
    this.cartService.totalOrders.subscribe(
      data => {
        this.totalSize = data
      }
    )
    this.cartService.totalPrice.subscribe(
      data => {
        this.totalPrice = data
      }
    )
  }

}
