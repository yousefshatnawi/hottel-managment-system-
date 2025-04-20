import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeRequest } from '../../../models/employee-request.model';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-request-details',
  standalone: false,
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent implements OnInit {
  request: EmployeeRequest | undefined;
  loading: boolean = true;
  requestId: number = 0;
 

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.requestId = +params.get('id')!;
      this.loadRequestDetails();
    });
  }

  loadRequestDetails(): void {
    this.request = this.employeeService.getRequestById(this.requestId);
    this.loading = false;
  }

  updateRequestStatus(newStatus: 'pending' | 'progress' | 'done'): void {
    if (this.request) {
      
      const allowedStatuses: ('pending' | 'progress' | 'done')[] = ['pending', 'progress', 'done'];

      if (allowedStatuses.includes(newStatus)) {
        this.employeeService.updateRequestStatus(this.request.id, newStatus);
        this.request.requestStatus = newStatus;
      } else {
        console.error('Invalid request status:', newStatus);  
      }
    }
  }
}
