import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header-dash',
  standalone: false,
  templateUrl: './header-dash.component.html',
  styleUrl: './header-dash.component.scss'
})
export class HeaderDashComponent {
    employeeData: Employee = { id: 0, name: '', role: '',email:'' }; 
   currentUser: any = null;
  
   
  constructor(private router: Router, private authService: AuthService) {
    this.currentUser = this.authService.getCurrentUser(); 
  }


  ngOnInit(): void {
    this.employeeData = JSON.parse(localStorage.getItem('employee') || '{}');
    
  
  
  
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
}
