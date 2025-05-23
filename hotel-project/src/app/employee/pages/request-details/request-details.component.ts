import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeRequest } from '../../../models/employee-request.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-request-details',
  standalone: false,
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent implements OnInit {
  employee: any = {}; 
  request: EmployeeRequest | undefined;
  loading: boolean = true;
  requestId: number = 0;
  errorMessage: string = '';
 
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.requestId = +params.get('id')!;
      this.loadRequestDetails();
      const employeeData = localStorage.getItem('employee');
      if (employeeData) {
        this.employee = JSON.parse(employeeData);
      }
    });
  }

loadRequestDetails(): void {
  this.request = this.employeeService.getRequestById(this.requestId);

  if (!this.request) {
    const newReq = JSON.parse(localStorage.getItem('updatedRequest') || '{}');
    if (newReq && newReq.id === this.requestId) {
      this.request = newReq;
    }
  }

  this.loading = false;

  if (!this.request) {
    this.errorMessage = `Request with ID ${this.requestId} not found.`;
  }
}


  updateRequestStatus(requestId: number | undefined, newStatus: 'pending' | 'progres' | 'done') {
    const employee = JSON.parse(localStorage.getItem('employee') || '{}');

    if (!requestId) {
      this.errorMessage = 'Invalid request ID.';
      return;
    }
    const updated = this.employeeService.updateRequestStatus(requestId, newStatus ,employee.id);
    if (updated) {
      this.loadRequestDetails();
      this.errorMessage = '';
    } else {
      this.errorMessage = `Failed to update request with ID ${requestId}.`;
    }
  }


}