import { Component, OnInit, Inject } from '@angular/core';
import { AccountsettingsComponent } from '../accountsettings/accountsettings.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-accountsettingsdialog',
  templateUrl: './accountsettingsdialog.component.html',
  styleUrls: ['./accountsettingsdialog.component.css']
})
export class AccountsettingsdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccountsettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
