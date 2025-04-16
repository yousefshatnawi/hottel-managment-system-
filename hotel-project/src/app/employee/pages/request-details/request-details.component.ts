import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeRequest } from '../../../models/employee-request.model';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-request-details',
  standalone: false,
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent implements OnInit {

  request: EmployeeRequest | null = null;
  employee: Employee | null = null;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    const requestId = this.route.snapshot.paramMap.get('id');
    const allRequests = JSON.parse(localStorage.getItem('employeeRequests') || '[]');
    const allEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
  
    if (requestId) {
      // نبحث عن الطلب أولاً
      const foundRequest = allRequests.find((req: EmployeeRequest) => req.id === +requestId);
      if (foundRequest) {
        this.request = foundRequest;
  
        // نحفظ employeeId في متغير
        const employeeId = foundRequest.employeeId;
  
        // ثم نبحث عن الموظف باستخدام المتغير المؤقت
        this.employee = allEmployees.find((emp: Employee) => emp.id === employeeId) || null;
      }
    }
  }


  updateStatus(newStatus: "pending" | "progress" | "done"): void {
    if (this.request) {
      const allRequests: EmployeeRequest[] = JSON.parse(localStorage.getItem('employeeRequests') || '[]');
  
      const index = allRequests.findIndex(req => req.id === this.request!.id);
      if (index !== -1) {
        allRequests[index].requestStatus = newStatus;
        localStorage.setItem('employeeRequests', JSON.stringify(allRequests));
  
        this.request.requestStatus = newStatus;
        alert('✅ Request status has been updated!');
      }
    }
  }
}  