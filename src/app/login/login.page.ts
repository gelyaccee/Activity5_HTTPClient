import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl  } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ProfileService } from '../services/profile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  constructor(private router: Router,
    private api_login: LoginService,
    private api_profile: ProfileService) { }

  ngOnInit() {
  }

  login(){
    this.api_login.UserAuth(this.username, this.password).subscribe((result:any) =>{  
      this.api_profile.tempUsername = this.username
      this.api_profile.tempPassword = this.password
      this.router.navigate(['/home']);  
    },(error) => { 
      console.error("Something went wrong...");
    })   

    this.router.navigate(['/home']);   
  }

  update() {
    // this.password.setValue('sad');
  }

}
