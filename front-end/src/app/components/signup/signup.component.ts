import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../../services/security/authentication-service.service';
import {Router} from '@angular/router';
import {SpaceValidator} from '../../model/space-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',
              '../../../assets/css/login-signup.css'
  ]
})
export class SignupComponent implements OnInit {


  parentFromGroup: FormGroup;

  constructor(private childFormGroup: FormBuilder,
              private authenticationService: AuthenticationServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.myFormSignup()
  }
  myFormSignup(){
    this.parentFromGroup = this.childFormGroup.group({
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
    return this.parentFromGroup.get('user.email')
  }
  get password(){
    return this.parentFromGroup.get('user.password')
  }
   signup() {
    if(this.parentFromGroup.invalid){
      this.parentFromGroup.markAllAsTouched();
      return;
    }else {
      // alert(this.parentFromGroup.controls['user'].value.email);
      // alert(this.parentFromGroup.controls['user'].value.password);
      this.authenticationService.createAccountUser(
        this.parentFromGroup.controls['user'].value.email,
        this.parentFromGroup.controls['user'].value.password
      ).subscribe({
        next: response => {
          this.router.navigateByUrl('/login')
        }
      })
    }

  }
}
