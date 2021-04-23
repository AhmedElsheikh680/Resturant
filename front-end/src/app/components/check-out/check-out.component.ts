import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  checkoutParentGroup: FormGroup;
  constructor(private formChildGroup: FormBuilder) { }

  ngOnInit(): void {
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
    }else {
      this.checkoutParentGroup.controls.toPerson.reset();
    }

  }
}
