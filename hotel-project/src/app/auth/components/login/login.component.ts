import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../models/user.model';
import { CustomerService } from '../../../customer/services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { PolicyComponent } from '../../../policy/policy.component';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;


  constructor(
    private authService: AuthService,
    private customerService: CustomerService,
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}
  get email() {
    return this.loginForm.get('email')!;
  }
  
  get password() {
    return this.loginForm.get('password')!;
  }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  // openPolicyModal() {
  //   this.dialog.open(PolicyComponent, {
  //     width: '800px',  // عرض المودال
  //     height: '650px'  // ارتفاع المودال
  //   });
  // }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.loginUser(email, password)
        .then((user: User) => {
          console.log(user.email, user.password);

          localStorage.setItem('user', JSON.stringify(user));
          const customer = this.customerService.getCustomerByemail(user.email);
          
          switch (user.userType) {
            case 'admin':
              this.router.navigate(['/admin']);
              break;
            case 'employee':
              this.router.navigate(['/employee']);
              const employee = this.customerService.getEmployeeByemail(user.email);
              localStorage.setItem('employee', JSON.stringify(employee));
              break;
            default:
              this.router.navigate(['/customer']);
              localStorage.setItem('customer', JSON.stringify(customer));
          }
          this.dialogRef.close(); // يسكر البوب اب
        })
        .catch(error => {
          console.error(error);
          alert('Email or password is incorrect');
        });
    }
  }
  navigateToSignup() {
    this.router.navigate(['/signup']); 
    this.dialogRef.close(); 

  }
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
