import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/components/login/login.component';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  profileLink = '/'; // رابط يوجه حسب نوع المستخدم

  constructor(private dialog: MatDialog) {}

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',  // يمكنك تحديد عرض النافذة المنبثقة
    });

    dialogRef.afterClosed().subscribe(result => {
      // التعامل مع النتيجة بعد إغلاق النافذة المنبثقة إذا لزم الأمر
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      this.isLoggedIn = true;
      if (user.userType === 'customer') {
        this.profileLink = '/customer/profile';
      }
    } else {
      this.isLoggedIn = false;
    }
  }
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('customer');

    this.isLoggedIn = false;
  }

}
