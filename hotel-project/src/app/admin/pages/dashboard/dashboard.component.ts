import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/services/admin.service';

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

   constructor(  private route: ActivatedRoute, private router: Router ,    private adminService: AdminService)
  {}
       
  ngOnInit(): void {
    // this.employeeCount = this.adminService.getEmployees().length;
    this.adminService.getEmployees().then(employees => {
      this.employeeCount = employees.length;
    });
    this.customerCount = this.adminService.getCustomers().length;
    this.roomCount = this.adminService.getRooms().length;
    //this.userCount = this.adminService.getUsers().length;

    this.isDashboardPage = this.router.url.includes('dashboard');
        const saved = localStorage.getItem('tasks');

    this.tasks = saved ? JSON.parse(saved) : [
      "Add Employee",
      "Add Room",
      "View Employee",
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
  this.router.navigate(['/login'])
}


}
