import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { PolicyComponent } from '../../../policy/policy.component';
import { MatDialog } from '@angular/material/dialog';


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
      width: '500px',  // يمكنك تغيير العرض حسب الحاجة
    });

    // التعامل مع النتائج بعد إغلاق النافذة المنبثقة إذا لزم الأمر
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
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  register() {
    if (this.registerForm.valid) {
      const customerData: User = {
        ...this.registerForm.value,
        userType: 'customer',
      };
      localStorage.setItem('newCustomer', JSON.stringify(customerData));
      this.authService.registerUser(customerData)
        .then(() => {
          this.router.navigate(['/auth/login']);
        })
        .catch(error => {
          alert(error);
        });
    }
  }
}
