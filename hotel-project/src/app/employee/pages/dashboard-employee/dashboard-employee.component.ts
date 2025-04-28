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
todaysRequests: EmployeeRequest[] = [];
notifications: any[] = [];
activityLog: any[] = [];


today: string = new Date().toISOString().split('T')[0];


selectedStatus: string = '';
filteredRequests: any[] = [];

constructor(private employeeService: EmployeeService, private router: Router) {}

ngOnInit(): void {
  this.employee = JSON.parse(localStorage.getItem('employee') || '{}');
  


  this.loadRequests();
}

loadRequests() {
  const allRequests = this.employeeService.getRequestsByEmployee();

  this.pendingRequests = allRequests.filter(req => req.requestStatus === 'pending');
  this.inProgressRequests = allRequests.filter(req => req.requestStatus === 'progres');
  this.completedRequests = allRequests.filter(req => req.requestStatus === 'done');
  this.recentRequests = allRequests.slice(0, 5);
  this.todaysRequests = allRequests.filter(req => {
    const reqDate = new Date(req.date).toISOString().split('T')[0];
    return reqDate === this.today;
  });

  this.generateNotifications(allRequests);
  this.generateActivityLog(allRequests);
  this.filteredRequests = this.recentRequests;

}

generateNotifications(requests: EmployeeRequest[]) {
  this.notifications = requests
    .filter(req => req.requestStatus === 'pending' || req.requestStatus === 'progres')
    .map(req => ({
      message: `Request #${req.id} is now "${req.requestStatus}"`,
      date: req.date
    }))
    .slice(-5)
    .reverse();
}



generateActivityLog(requests: EmployeeRequest[]) {
  this.activityLog = requests
    .filter(req => req.requestStatus === 'done')
    .map(req => ({
      date: req.date,
      message: `You completed request #${req.id}`
    }))
    .slice(-5)
    .reverse();
}




viewRequestDetails(requestId: number) {
  this.router.navigate(['/employee/request-details', requestId]);
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


filterRequests() {
  if (this.selectedStatus === '') {
    
    this.filteredRequests = this.recentRequests;
  } else {
    this.filteredRequests = this.recentRequests.filter(request => request.requestStatus === this.selectedStatus);
  }
}
}