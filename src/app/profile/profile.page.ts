import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userInformation : any

  constructor(
    private api_profile: ProfileService) {
      this.api_profile.getUserInfo().subscribe((result:any) =>{   
        this.userInformation = result
      },(error) => { 
        console.error("Something went wrong...");
      })   
    }

  ngOnInit() {
  }

}
