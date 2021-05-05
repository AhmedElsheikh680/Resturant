import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationServiceService} from '../../services/security/authentication-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  parentFormGroup: FormGroup

  constructor(private childFormGroup: FormBuilder,
              private authenticationService: AuthenticationServiceService,
              private router: Router) { }

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
    // alert(this.parentFormGroup.controls['user'].value.email);
    // alert(this.parentFormGroup.controls['user'].value.password)
    this.authenticationService.executeAuthentication(
      this.parentFormGroup.controls['user'].value.email,
      this.parentFormGroup.controls['user'].value.password
    ).subscribe({
      next: response => {
        this.router.navigateByUrl('/orders')
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
