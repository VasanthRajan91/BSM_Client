import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API = 'http://localhost:9090/bcm';
  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post(this.API + "/login", loginData,
      { responseType: 'text' });
  }
}
