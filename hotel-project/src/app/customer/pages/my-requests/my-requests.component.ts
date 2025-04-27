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
    const updataStatus = JSON.parse(localStorage.getItem('updatedRequest') || '{}');

    this.myRequests = this.requestService.getRequestsByEmployee();
    
    if (updataStatus && updataStatus.id) {
      const idx = this.myRequests.findIndex(r => r.id === updataStatus.id);
      if (idx !== -1) {
        this.myRequests[idx] = updataStatus;
      } else {
        this.myRequests.push(updataStatus);
      }
    }
    const Employee=this.requestService.getAllEmployee();
    this.myRequests= this.myRequests.map((app:EmployeeRequest)=>{
      return {
        ...app,
        employee:Employee.find((Employee) => Employee.id === app.id)
      }
    })

    /*
    const customers=this.customerService.getAllCustomers();
    
     this.appointments= this.appointments.map((app:RoomAppointment)=>{
        return {
          ...app,
          customer:customers.find((customer) => customer.id === app.customerId)
        }
      })
      co
    
    */
    
    
  }

 
}


      