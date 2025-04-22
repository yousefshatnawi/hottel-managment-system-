import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isLoggedIn = false;
  profileLink = '/'; // رابط يوجه حسب نوع المستخدم
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      this.isLoggedIn = true;
      if  (user.userType === 'customer') {
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
