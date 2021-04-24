import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Country} from '../../model/country';
import {State} from '../../model/state';
import {StateCountryServiceService} from '../../services/state-country-service.service';

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
  constructor(private formChildGroup: FormBuilder,
              private stateCountryService:StateCountryServiceService) { }

  ngOnInit(): void {
    this.myForm();
    this.getAllCountries();
    // this.getAllStates();
  }
  myForm(){
    this.checkoutParentGroup = this.formChildGroup.group({
      data: this.formChildGroup.group({
        fullName: [''],
        gmail: [''],
        phone: ['']
      }),
      fromPerson: this.formChildGroup.group({
        country: [''],
        state: [''],
        zipCode: ['']
      }),
      toPerson: this.formChildGroup.group({
        country: [''],
        state: [''],
        zipCode: ['']
      }),
      creditCard: this.formChildGroup.group({
        cardType: [''],
        cardNumber: [''],
        code: ['']
      })
    })
  }
  done() {
    console.log(this.checkoutParentGroup.get('data').value);
    console.log(this.checkoutParentGroup.get('fromPerson').value);
    console.log(this.checkoutParentGroup.get('toPerson').value);
    console.log(this.checkoutParentGroup.get('creditCard').value);
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


}
