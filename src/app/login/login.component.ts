import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginData: any;
  respMsg: any;
  constructor(
    private loginService: LoginService,
    private route: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginData = this.loginForm.value;
    this.loginService.login(this.loginData).subscribe(
      response => {
        let loginResp = JSON.parse(response);
        if (loginResp.responseCode == "200") {
          localStorage.setItem("Token", loginResp);
          if (loginResp != null) {
            this.route.navigateByUrl('/loan');
          }
        } else {
          this.route.navigateByUrl('/login');
          this.respMsg = loginResp.responseMsg;
        }

      }, err => {
        console.log(err)
      }
    );
  }
}
