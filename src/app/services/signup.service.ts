import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  API = "localhost:8000/api"
  constructor(private http: HttpClient) { }

  signup(firstname,lastname,username,password,street,city,province,zip){
    return this.http.get(this.API+"/profileCreate?firstname="+firstname+
    "&lastname="+lastname+
    "&username="+username+
    "&password="+password+
    "&street="+street+
    "&city="+city+
    "&province="+province+
    "&zip="+zip)
  }
}
