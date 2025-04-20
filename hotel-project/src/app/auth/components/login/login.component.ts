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
        this.authService.loginUser(email, password)
          .then((user: User) => {
            console.log(user.email , user.password)

            localStorage.setItem('user', JSON.stringify(user));
              const customer = this.customerService.getCustomerByemail(user.email);
              localStorage.setItem('customer', JSON.stringify(customer));
            switch (user.userType) {
              case 'admin':
                this.router.navigate(['/admin']);
                break;
              case 'employee':
                this.router.navigate(['/employee']);
                break;
              default:
                this.router.navigate(['/customer']);
            }
          })
          .catch(error => {

            console.error(error);
            alert('Email or password is incorrect');
          });
      }
    }
  
    
}
