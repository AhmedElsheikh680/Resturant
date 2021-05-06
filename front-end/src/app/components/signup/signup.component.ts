import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationServiceService} from '../../services/security/authentication-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
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
        email: [''],
        password: ['']
      })
    })
  }

   signup() {
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
