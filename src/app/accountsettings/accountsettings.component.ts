import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { AccountsettingsdialogComponent } from '../accountsettingsdialog/accountsettingsdialog.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.css']
})
export class AccountsettingsComponent implements OnInit {
  settingsForm: FormGroup;
  submitted = false;
  settingsData: any;
  respMsg: any;
  constructor(private formBuilder: FormBuilder,
    private regService: RegistrationService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.settingsForm = this.formBuilder.group({
      customerid: ['', Validators.required],
      name: ['', Validators.required],
      accountno: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      registrationdate: ['', Validators.required],
      bankname: ['', Validators.required],
      branchname: ['', Validators.required],
      indentificationprooftype: ['', Validators.required],
      indentificationdocno: ['', Validators.required],
      accountholdername: ['', Validators.required],
      accountholdernumber: ['', Validators.required],
      accountholderaddress: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.email]],
      marital: ['', Validators.required],
      accounttype: ['', Validators.required],
      citizenship: ['', Validators.required],
      citizenstatus: ['', Validators.required],
      guardiantype: ['', Validators.required],
      guardianname: ['', Validators.required]
    });

    this.regService.getAccountDetails(localStorage.getItem("Token")).subscribe(
      response => {
        let accResp = JSON.parse(response);
        this.settingsForm = this.formBuilder.group(accResp);
      }, err => {
        console.log(err)
      }
    );
  }

  get f() { return this.settingsForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.settingsForm.invalid) {
      return;
    }
    this.settingsData = this.settingsForm.value;
    this.regService.updateAccountDetails(this.settingsData).subscribe(
      response => {
        let accResp = JSON.parse(response);
        if (accResp.responseCode == "200") {
          this.dialog.open(AccountsettingsdialogComponent, {
            width: '250px',
            data: { msg: accResp.responseMsg }
          });
        } else {
            this.respMsg = accResp.responseMsg;
        }
      }, err => {
        console.log(err)
      }
    );
  }
}
