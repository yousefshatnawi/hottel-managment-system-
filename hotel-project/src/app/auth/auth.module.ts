import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
=======
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
>>>>>>> reema


@NgModule({
  declarations: [
<<<<<<< HEAD
    LoginComponent,
    SignupComponent
=======
    LoginComponent
>>>>>>> reema
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
   
>>>>>>> reema
  ]
})
export class AuthModule { }
