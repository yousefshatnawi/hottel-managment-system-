import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

  export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
  
    constructor(private fb: FormBuilder, private router: Router) {}
  
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }
  
    login() {
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
  
        if (email === 'admin@hotel.com') {
          localStorage.setItem('user', JSON.stringify({ email, userType: 'admin' }));
          this.router.navigate(['/admin']);
        } else if (email === 'employee@hotel.com') {
          localStorage.setItem('user', JSON.stringify({ email, userType: 'employee' }));
          this.router.navigate(['/employee']);
        } else {
          localStorage.setItem('user', JSON.stringify({ email, userType: 'customer' }));
          this.router.navigate(['/customer']);
        }
      }
    }

}
