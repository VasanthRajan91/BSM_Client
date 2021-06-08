import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoanService } from '../loan.service';
import { LoandialogComponent } from '../loandialog/loandialog.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from '@angular/router';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  private map = new Map<string, string[]>([
    ['Educational', ['8%']],
    ['Housing', ['9%']],
    ['Personal', ['10%']],
  ])
  loanType: string;
  loanInterest: string;

  get loanTypes(): string[] {
    return Array.from(this.map.keys());
  }

  get loanInterests(): string[] | undefined {
    return this.map.get(this.loanType);
  }
  loandurations = ['5','10','15','20'];
  loanForm  = this.formBuilder.group({
    loantype: '',
    loanamount: '',
    loanapplydate: '',
    interest: '',
    loanduration: '',
    coursefee: '',
    course: '',
    fathername: '',
    annualincome: '',
    companyname: ''
  });
  loanData: any;
  constructor(private formBuilder: FormBuilder,
    private loanService: LoanService,
    private dialog: MatDialog,
    private route: Router) { }

  ngOnInit(): void {
  }

  onLoanSubmit() {
    this.loanData = this.loanForm.value;
    console.log(this.loanData);
    let token = localStorage.getItem("Token");
    this.loanService.createLoan(this.loanData, token).subscribe(
      response => {
        console.log(response);
        this.dialog.open(LoandialogComponent, {
          width: '400px'
        });
      }, err => {
        console.log(err)
      }
    );
  }

  logout() {
    localStorage.removeItem("Token");
    this.route.navigateByUrl('/login');
  }
}
