import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  API = 'http://localhost:9090/bcm';
  constructor(private http: HttpClient) { }

  newUser(data: any) {
   return this.http.post(this.API + "/registration", data, { responseType: 'text' });
  }

  getAccountDetails(token:String){
    return this.http.post(this.API + "/accountDetails", token, { responseType: 'text' });
  }

  updateAccountDetails(data: any) {
    return this.http.post(this.API + "/updateAccountDetails", data, { responseType: 'text' });
  }
}
