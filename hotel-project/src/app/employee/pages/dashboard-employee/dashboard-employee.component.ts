import { Component, OnInit } from '@angular/core';
import { EmployeeRequest } from '../../../models/employee-request.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-employee',
  standalone: false,
  templateUrl: './dashboard-employee.component.html',
  styleUrl: './dashboard-employee.component.scss'
})
export class DashboardEmployeeComponent implements OnInit {
  employee: any = {}; 
  pendingRequests: EmployeeRequest[] = [];
  inProgressRequests: EmployeeRequest[] = [];
  completedRequests: EmployeeRequest[] = [];
  recentRequests: EmployeeRequest[] = [];

  constructor(private employeeService: EmployeeService , private router: Router ) {}

  ngOnInit(): void {
    this.employee = JSON.parse(localStorage.getItem('employee') || '{}');
    this.loadRequests();
  }

  loadRequests() {
    // محاكاة تحميل البيانات
    const allRequests = this.employeeService.getRequestsByEmployee();
    
    this.pendingRequests = allRequests.filter(req => req.requestStatus === 'pending');
    this.inProgressRequests = allRequests.filter(req => req.requestStatus === 'progres');
    this.completedRequests = allRequests.filter(req => req.requestStatus === 'done');
    
    // الحصول على الطلبات الأخيرة
    this.recentRequests = allRequests.slice(0, 5);  // عرض 5 طلبات أخيرة
  }

  viewRequestDetails(requestId: number) {
    // توجيه المستخدم إلى تفاصيل الطلب
    console.log(`Viewing details for request #${requestId}`);
  }
   
  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }


  displayedColumns: string[] = ['id', 'requestType', 'status', 'actions'];

getChipColor(status: string): string {
  switch (status) {
    case 'pending':
      return 'warn';
    case 'progress':
      return 'accent';
    case 'done':
      return 'primary';
    default:
      return '';
  }
}

}