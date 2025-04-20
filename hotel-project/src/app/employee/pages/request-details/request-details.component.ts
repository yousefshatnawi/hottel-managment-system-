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

  updateRequestStatus(requestId: number |undefined, newStatus: 'pending' | 'progress' | 'done') {
    const requests = JSON.parse(localStorage.getItem('employeeRequests') || '[]');
  
    const index = requests.findIndex((r: any) => r.id === requestId);
    if (index !== -1) {
      requests[index].requestStatus = newStatus;
      localStorage.setItem('employeeRequests', JSON.stringify(requests));
    }
  }
  
}
