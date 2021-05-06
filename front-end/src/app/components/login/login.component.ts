import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../../services/security/authentication-service.service';
import {Router} from '@angular/router';
import {SpaceValidator} from '../../model/space-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
            '../../../assets/css/login-signup.css'
  ]
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
        email: new FormControl('', [
          Validators.required,
          SpaceValidator.onlyContainsSpace,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        ]),
        password: new FormControl('', [
          Validators.required
        ])
      })
    })
  }
  get email(){
    return this.parentFormGroup.get('user.email');
  }
  get password(){
    return this.parentFormGroup.get('user.password');
  }
  login() {
    if(this.parentFormGroup.invalid){
      this.parentFormGroup.markAllAsTouched();
      return;
    } else {
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
}
