import { Component, OnInit } from '@angular/core';
import { EmployeeRequest } from '../../../models/employee-request.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-my-requests',
  standalone: false,
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent implements OnInit {


  employeeData: Employee = { id: 0, name: '', role: '', email: '', password: '' };
    requests: EmployeeRequest[] = [];
    loading: boolean = true;
  
    constructor(
      private employeeService: EmployeeService,
      private authService: AuthService,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      this.employeeData = JSON.parse(localStorage.getItem('employee') || '{}');
      this.loadRequests();
    }
  
    loadRequests() {
      this.loading = true;
      const allRequests = this.employeeService.getRequestsByEmployee();
      this.requests = allRequests;
      this.loading = false;
    }
  
   
  }
