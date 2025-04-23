import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';


@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  isSidebarOpen = false;
  currentUser: any = null;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getCurrentUser(); // جلب المستخدم الحالي من localStorage
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}