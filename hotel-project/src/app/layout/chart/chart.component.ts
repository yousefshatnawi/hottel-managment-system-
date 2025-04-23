import { Component, OnInit } from '@angular/core';
import 'chart.js/auto';  // يضمن تسجيل جميع عناصر Chart.js
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { Router } from '@angular/router';
import { EmployeeService } from '../../employee/services/employee.service';

@Component({
  selector: 'app-chart',
  standalone: false,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  employee: any = {};
  pendingCount = 0;
  inProgresCount = 0;
  completedCount = 0; 
constructor(private employeeService: EmployeeService, private router: Router) {}

  public barChartType = 'bar' as const;              
  public barChartData: ChartData<'bar'> = {
    labels: ['Pending', 'In Progres', 'Completed'],
    datasets: [{
      label: 'Requests',
      data: [0, 0, 0],
      backgroundColor: []
    }]
  };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  };

  // Doughnut Chart
  public doughnutChartType = 'doughnut' as const;    // حرفي لضمان التوافق
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Pending', 'In Progres', 'Completed'],
    datasets: [{
      data: [0, 0, 0],
      backgroundColor: []
    }]
  };
  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  };

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.employee = JSON.parse(userData);
    }
  
    // جلب كل الطلبات المرتبطة بالموظف من السيرفيس
    const requests = this.employeeService.getRequestsByEmployee();
  
    // الحسابات
    this.pendingCount    = requests.filter(r => r.requestStatus === 'pending').length;
    this.inProgresCount = requests.filter(r => r.requestStatus === 'progres').length;
    this.completedCount  = requests.filter(r => r.requestStatus === 'done').length;
  
    // الألوان
    const colors = [
      this.pendingCount    > 5 ? '#f59e0b' : '#fde68a',
      this.inProgresCount > 5 ? '#2563eb' : '#bfdbfe',
      this.completedCount  > 5 ? '#059669' : '#bbf7d0'
    ];
  
    // تحديث الرسم البياني
    this.barChartData.datasets[0].data = [this.pendingCount, this.inProgresCount, this.completedCount];
    this.barChartData.datasets[0].backgroundColor = colors;
  
    this.doughnutChartData.datasets[0].data = [this.pendingCount, this.inProgresCount, this.completedCount];
    this.doughnutChartData.datasets[0].backgroundColor = colors;
  }
  
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
}
