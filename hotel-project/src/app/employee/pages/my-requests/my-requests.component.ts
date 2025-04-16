import { Component, OnInit } from '@angular/core';
import { EmployeeRequest } from '../../../models/employee-request.model';

@Component({
  selector: 'app-my-requests',
  standalone: false,
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent implements OnInit {

  myRequests: EmployeeRequest[] = [];

  constructor() {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const allRequests = JSON.parse(localStorage.getItem('employeeRequests') || '[]');
    const employees = JSON.parse(localStorage.getItem('employees') || '[]');

    const employee = employees.find((emp: any) => emp.email === currentUser.email);

    if (employee) {
      this.myRequests = allRequests.filter((req: any) => req.employeeId === employee.id);
    }
  }
}