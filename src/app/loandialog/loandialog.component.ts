import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoanComponent } from '../loan/loan.component';

@Component({
  selector: 'app-loandialog',
  templateUrl: './loandialog.component.html',
  styleUrls: ['./loandialog.component.css']
})
export class LoandialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onOk(): void {
    this.dialogRef.close();
  }
}
