import { Component } from '@angular/core';
import { AdminService } from '../../services/services/admin.service';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
employees: Employee[] = [];

  
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  async loadEmployees(): Promise<void> {
    this.employees = await this.adminService.getEmployees();
  }




}
