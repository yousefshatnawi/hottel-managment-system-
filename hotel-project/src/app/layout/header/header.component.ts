import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/components/login/login.component';
import { RequestServiceComponent } from '../../customer/pages/request-service/request-service.component';
import { MyReservationsComponent } from '../../customer/pages/my-reservations/my-reservations.component';
import { MyRequestsComponent } from '../../customer/pages/my-requests/my-requests.component';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  showMyRequest: boolean = false;

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
    this.showMyRequest = user !== null;
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
    localStorage.clear();

    this.isLoggedIn = false;
  }
reqestService() {
    this.dialog.open(MyRequestsComponent, {
      width: '65vw', 
      maxWidth: '90vw',
      height: '400px'  // ارتفاع المودال
    });
  }
  // myReservations() {
  //   this.dialog.open(MyReservationsComponent, {
  //     width: '65vw',      // خلي العرض نسبة من الشاشة
  //     maxWidth: '95vw',   // لازم تحكي للديالوج أنه يقبل
  //     height: '55vh',     // ارتفاع
  //     maxHeight: '90vh',  // لازم تحكي يقبل
  //     panelClass: 'custom-dialog-container' // اختياري لو بدك كمان تعدلي CSS زيادة
  //   });
  //   }
}
