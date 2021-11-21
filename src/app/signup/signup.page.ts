import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    username: [''],
    password: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      province: [''],
      zip: ['']
    }),
  });
  constructor(private fb: FormBuilder, private router: Router,
    private api_login: SignupService,
    private api_profile: ProfileService) {
      
     }

  ngOnInit() {
  }

  signup(){
   
     this.api_login.signup(this.profileForm.value.firstName,
      this.profileForm.value.lastName,
      this.profileForm.value.username,
      this.profileForm.value.password,
      this.profileForm.value.address.street,
      this.profileForm.value.address.city,
      this.profileForm.value.address.province,
      this.profileForm.value.address.zip).subscribe((result:any) =>{ 
        this.api_profile.tempUsername = this.profileForm.value.username
        this.api_profile.tempPassword = this.profileForm.value.password
      this.router.navigate(['/login']);  
    },(error) => { 
      console.error("Something went wrong...");
    })   

    this.router.navigate(['/login']);   
  }

  }
