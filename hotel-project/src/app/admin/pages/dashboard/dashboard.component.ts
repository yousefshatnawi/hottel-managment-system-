import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/services/admin.service';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent { 

 employeeCount = 0;
  customerCount = 0;
  roomCount = 0;
  userCount = 0;
  selectedDate: Date | null = null;
  tasks: string[] = [];
  newTask: string = '';
  isDashboardPage: boolean = false;

  // بيانات الرسم البياني
  barChartData: ChartData<'bar'> = {
    labels: ['Employees', 'Customers', 'Rooms', 'Users'],
    datasets: [{
      label: 'Counts',
      data: [0, 0, 0, 0],
      backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC']
    }]
  };

  doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Employees', 'Customers', 'Rooms', 'Users'],
    datasets: [{
      data: [0, 0, 0, 0],
      backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC']
    }]
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  };

  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getEmployees().then(employees => {
      this.employeeCount = employees.length;
      this.updateCharts();
    });

    this.customerCount = this.adminService.getCustomers().length;
    this.roomCount = this.adminService.getRooms().length;
    this.userCount = this.adminService.getAllUser().length;

    this.updateCharts();

    this.isDashboardPage = this.router.url.includes('dashboard');
    const saved = localStorage.getItem('tasks');
    this.tasks = saved ? JSON.parse(saved) : [
      "Add Employee",
      "Add Room",
      "View Employee",
    ];
  }

  updateCharts() {
    const data = [
      this.employeeCount,
      this.customerCount,
      this.roomCount,
      this.userCount
    ];
    this.barChartData.datasets[0].data = data;
    this.doughnutChartData.datasets[0].data = data;
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.saveTasks();
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}