import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { RegistrationService } from '../registration.service';
import { RegistrationdialogComponent } from '../registrationdialog/registrationdialog.component';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DatePipe } from '@angular/common';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class RegistrationComponent implements OnInit {
  regData: any;
  registrationForm: FormGroup;
  submitted = false;
  maxDate = new Date();
  respMsg: any;
  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private regService: RegistrationService,
    private datepipe: DatePipe) {}

  ngOnInit(): void {
    this.registrationForm  = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      guardianname: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      marital: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      dob: ['', Validators.required],
      accounttype: ['', Validators.required]
    });
  }
  get f() { return this.registrationForm.controls; } 

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    this.regData = this.registrationForm.value;
    let latest_date =this.datepipe.transform( this.regData.dob, 'dd/MM/yyyy');
    this.regData.dob = latest_date;
    this.regService.newUser(this.regData).subscribe(
      response => {
        let regResp = JSON.parse(response);
        if(regResp.responseCode == "200") {
          this.dialog.open(RegistrationdialogComponent, {
            width: '250px',
            data: { customerid : regResp.customerid }
          });
        } else {
          this.respMsg = regResp.responseMsg;
        }
        
      }, err => {
        console.log(err)
      }
    );
  }

}
