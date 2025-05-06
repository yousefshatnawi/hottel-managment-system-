import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { employeeRequests } from '../../../shared/dataBase/employee-request';
import { CustomerService } from '../../services/customer.service';
import { EmployeeRequest } from '../../../models/employee-request.model';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-my-requests',
  standalone: false,
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent implements OnInit{
  myRequests: EmployeeRequest[] = [];

  constructor(
    private requestService: CustomerService,
  
  ) {}

  ngOnInit(): void {
    const updatedStatus = 
    JSON.parse(localStorage.getItem('updatedRequest')
     || 'null');    
    this.myRequests = this.requestService.getRequestsByEmployee();
  
    if (updatedStatus && updatedStatus.id) {
      const idx = this.myRequests.findIndex(r => r.id === updatedStatus.id);
      if (idx !== -1) {
        this.myRequests[idx] = updatedStatus;
      } else {
        this.myRequests.push(updatedStatus);
      }
    }
  
    const allEmployees = this.requestService.getAllEmployee();
  
    this.myRequests = this.myRequests.map((app: EmployeeRequest) => {
      const employee = allEmployees.find((e) => e.id === app.employeeId); 
      return {
        ...app,
        employee: employee
      };
    });
  }
  

    
    
  }

 



      