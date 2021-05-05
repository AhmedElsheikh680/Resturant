import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  parentFromGroup: FormGroup;

  constructor(private childFormGroup: FormBuilder) { }

  ngOnInit(): void {
    this.myFormSignup()
  }
  myFormSignup(){
    this.parentFromGroup = this.childFormGroup.group({
      user: this.childFormGroup.group({
        email: [''],
        password: ['']
      })
    })
  }

  signup() {
    alert(this.parentFromGroup.controls['user'].value.email);
    alert(this.parentFromGroup.controls['user'].value.password);
  }
}
