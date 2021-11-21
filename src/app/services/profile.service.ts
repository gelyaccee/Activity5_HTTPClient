import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  API = "localhost:8000/api"

  tempUsername = ""
  tempPassword = ""

  constructor(private http: HttpClient) { }

  getUserInfo(){
    return this.http.get(this.API+"/userInformation?username="+this.tempUsername+"&password="+this.tempPassword)
  }
}
