import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
// import { MatButtonModule } from '@angular/material/button';
// import { PolicyComponent } from '../policy/policy.component';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule
    
  ],
  exports :[
    AuthRoutingModule
  ]
})
export class AuthModule { }
