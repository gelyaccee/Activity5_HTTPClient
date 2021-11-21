import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API = "localhost:8000/api"
  constructor(private http: HttpClient) { }
 
  UserAuth(username, password){ 
    console.log(this.API+"/userAuth?username="+username+"&password="+password) 
    return this.http.get(this.API+"/userAuth?username="+username+"&password="+password);
  }
}
