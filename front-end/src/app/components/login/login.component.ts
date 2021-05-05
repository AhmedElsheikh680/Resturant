import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  parentFormGroup: FormGroup

  constructor(private childFormGroup: FormBuilder) { }

  ngOnInit(): void {
    this.myFormLogin()
  }
  myFormLogin(){
    this.parentFormGroup  = this.childFormGroup.group({
      user: this.childFormGroup.group({
        email: [''],
        password: ['']
      })
    })
  }

  login() {
    alert(this.parentFormGroup.controls['user'].value.email);
    alert(this.parentFormGroup.controls['user'].value.password)
  }
}
