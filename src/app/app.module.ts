import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from "@angular/material/dialog";
import { RegistrationdialogComponent } from './registrationdialog/registrationdialog.component';
import { LoginService } from './login.service';
import { LoanComponent } from './loan/loan.component';
import { LoanService } from './loan.service';
import { LoandialogComponent } from './loandialog/loandialog.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
import { AccountsettingsdialogComponent } from './accountsettingsdialog/accountsettingsdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationdialogComponent,
    LoanComponent,
    LoandialogComponent,
    AccountsettingsComponent,
    AccountsettingsdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule
  ],
  providers: [RegistrationService,LoginService,LoanService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
