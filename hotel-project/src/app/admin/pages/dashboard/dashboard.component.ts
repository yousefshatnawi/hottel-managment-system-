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

  // تعريف summaryData لحل الخطأ
  summaryData: { title: string, count: number }[] = [];

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

  async ngOnInit(): Promise<void> {
    this.isDashboardPage = this.router.url.includes('dashboard');

    const saved = localStorage.getItem('tasks');
    this.tasks = saved ? JSON.parse(saved) : [
      "Add Employee",
      "Add Room",
      "View Employee",
    ];

    // جلب البيانات من السيرفيس
    const employees = await this.adminService.getEmployees();
    this.employeeCount = employees.length;

    const customers = await this.adminService.getCustomers();
    this.customerCount = customers.length;

    const rooms = await this.adminService.getRooms();
    this.roomCount = rooms.length;

    const users = await this.adminService.getAllUser();
    this.userCount = users.length;

    // تحديث الرسوم البيانية والـ summary
    this.updateCharts();
    this.updateSummaryData();
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

  updateSummaryData() {
    this.summaryData = [
      { title: 'Total Employees', count: this.employeeCount },
      { title: 'Customers', count: this.customerCount },
      { title: 'Rooms', count: this.roomCount },
      { title: 'Users', count: this.userCount }
    ];
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
