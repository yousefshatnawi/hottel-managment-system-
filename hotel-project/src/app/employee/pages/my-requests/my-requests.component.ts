import { Component, OnInit } from '@angular/core';
import { EmployeeRequest } from '../../../models/employee-request.model';
import { EmployeeService } from '../../services/employee.service';

import { Employee } from '../../../models/employee.model';
import { employees } from '../../../shared/dataBase/employee';
import { customers } from '../../../shared/dataBase/customer';
import { roomAppointments } from '../../../shared/dataBase/room-appointment';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../auth/components/login/login.component';

@Component({
  selector: 'app-my-requests',
  standalone: false,
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent implements OnInit {


  employeeData: Employee = { id: 0, name: '', role: '',email:'', password:'' };
    requests: EmployeeRequest[] = [];
    loading: boolean = true;
    selectedRequest: EmployeeRequest | null = null;

    constructor(
      private employeeService: EmployeeService,
       private dialog: MatDialog ) {}
  
    ngOnInit(): void {

     
      this.loadRequests();
    }

    loadRequests() {
      this.loading = true;
      const allRequests = this.employeeService.getRequestsByEmployee();
      this.requests = allRequests;
      console.log(allRequests)
      console.log(this.requests)
      this.requests = this.requests.map((emp: EmployeeRequest) => {
        return {
          ...emp,
          customer: customers.find((customer) => customer.id === emp.customerId),
          employee: employees.find((employee) => employee.id === emp.employeeId),
          room: roomAppointments.find((room) => room.customerId  === emp.customerId)

        }
      });
        console.log(this.requests)
      this.loading = false;
    }
  

    openPopup(request: EmployeeRequest) {
      this.selectedRequest = request;
    }
  
    closePopup() {
      this.selectedRequest = null;
    }
  
   updateStatus(newStatus: 'pending' | 'progres' | 'done') {
  if (this.selectedRequest) {
    this.selectedRequest.requestStatus = newStatus;
    this.employeeService.updateRequestStatus(
      this.selectedRequest.id,
      newStatus,
      this.selectedRequest.employeeId
    );
  }
}
 
    
  }
