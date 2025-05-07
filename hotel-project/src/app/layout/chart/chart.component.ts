import { Component, OnInit } from '@angular/core';
import 'chart.js/auto';  
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

  public doughnutChartType = 'doughnut' as const;    
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
  
    const requests = this.employeeService.getRequestsByEmployee();
  
    this.pendingCount    = requests.filter(r => r.requestStatus === 'pending').length;
    this.inProgresCount = requests.filter(r => r.requestStatus === 'progres').length;
    this.completedCount  = requests.filter(r => r.requestStatus === 'done').length;
  
    const strongColors = ['#e67e22', '#2980b9', '#27ae60'];

    // const colors = [
    //   this.pendingCount    > 5 ? '#f39c12' : '#fceacb', // برتقالي مائل للذهبي
    //   this.inProgresCount > 5 ? '#3498db' : '#d6eaf8', // أزرق متناسق مع الـ sidebar
    //   this.completedCount  > 5 ? '#2ecc71' : '#d5f5e3'  // أخضر هادئ
    // ];
    
  
    this.barChartData.datasets[0].data = [
      this.pendingCount, 
      this.inProgresCount, 
      this.completedCount
    ];
    this.barChartData.datasets[0].backgroundColor = strongColors;
  
    this.doughnutChartData.datasets[0].data = [
      this.pendingCount, 
      this.inProgresCount, 
      this.completedCount
    ];
    this.doughnutChartData.datasets[0].backgroundColor = strongColors;
  }
  
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
}
