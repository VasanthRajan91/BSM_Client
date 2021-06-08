import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  API = 'http://localhost:9090/bcm';
  constructor(private http: HttpClient) { }

  createLoan(loandata: any, token: any) {
    return this.http.post(this.API + "/applyloan", loandata, { headers: { 'Content-Type': 'application/json', Token: token } });
  }
}
