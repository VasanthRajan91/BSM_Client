import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';


@Component({
  selector: 'app-registrationdialog',
  templateUrl: './registrationdialog.component.html',
  styleUrls: ['./registrationdialog.component.css']
})
export class RegistrationdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
