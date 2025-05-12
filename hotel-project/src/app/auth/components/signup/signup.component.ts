import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { PolicyComponent } from '../../../policy/policy.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private router: Router, 
              private authService: AuthService,
              private dialog: MatDialog) {}

  openPolicyModal(): void {
    const dialogRef = this.dialog.open(PolicyComponent, {
      width: '700px', 
      height:'600px' 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^07[0-9]{8}$/)]),
      address: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      acceptTerms: new FormControl(false, Validators.requiredTrue)

    });
  }
  get name() {
    return this.registerForm.get('name')!;
  }
  
  get phone() {
    return this.registerForm.get('phone')!;
  }
  
  get address() {
    return this.registerForm.get('address')!;
  }
  
  get email() {
    return this.registerForm.get('email')!;
  }
  
  get password() {
    return this.registerForm.get('password')!;
  }
  
  get acceptTerms() {
    return this.registerForm.get('acceptTerms')!;
  }
  
  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched(); 
      return; 
       }
    if (this.registerForm.valid) {
      
      const customerData: User = {
        ...this.registerForm.value,
        userType: 'customer',
      };
      localStorage.setItem('newCustomer', JSON.stringify(customerData));
      this.authService.registerUser(customerData)
        .then(() => {
          this.router.navigate(['/home']);
        })
        .catch(error => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something it was a wrong',
            confirmButtonColor: '#c0392b'
          });
        });
    }
  }
}
