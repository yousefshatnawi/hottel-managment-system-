import { Component, OnInit } from '@angular/core';
import { employeeRequests } from '../../../shared/dataBase/employee-request';
import { CustomerService } from '../../services/customer.service';
import { EmployeeRequest } from '../../../models/employee-request.model';


// interface RoomServiceRequest {
//   id: number;
//   date: string;
//   requestType: string;
//   requestStatus: 'pending' | 'progress' | 'done';
//   employeeName?: string;
// }


@Component({
  selector: 'app-my-requests',
  standalone: false,
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent implements OnInit{

constructor(private requestService: CustomerService){}
myRequests:  EmployeeRequest[] = [];
  ngOnInit(): void {
    this.myRequests=employeeRequests;  
      // this.myRequests = [
    //   {
    //     id: 1,
    //     date: '2025-04-10',
    //     requestType: 'cleaning',
    //     requestStatus: 'done',
    //     employeeName: 'Ahmad'
    //   },
    //   {
    //     id: 2,
    //     date: '2025-04-12',
    //     requestType: 'tv maintenance',
    //     requestStatus: 'progress',
    //     employeeName: 'Sara'
    //   },
    //   {
    //     id: 3,
    //     date: '2025-04-13',
    //     requestType: 'bathroom maintenance',
    //     requestStatus: 'pending'
    //   }
    // ];

  }
}

