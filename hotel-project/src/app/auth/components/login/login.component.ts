import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../models/user.model';
import { CustomerService } from '../../../customer/services/customer.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

  export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
       private customerService: CustomerService,
      private router: Router
    ) {}  
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }
    login() {
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
  
       
    
  
    
}
