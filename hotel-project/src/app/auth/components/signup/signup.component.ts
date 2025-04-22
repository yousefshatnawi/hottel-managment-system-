import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,  
       private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^07[0-9]{8}$/)]],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register() {
    if (this.registerForm.valid) {
      const customerData: User = {
        ...this.registerForm.value,
        userType: 'customer',
      };
      localStorage.setItem('newCustomer',JSON.stringify(customerData));
      this.authService.registerUser(customerData)
        .then(() => {
          this.router.navigate(['/auth/login']);
        })
        .catch(error => {
          alert(error); // مثلاً: "Email already exists"
        });
    }
  }
  
}
