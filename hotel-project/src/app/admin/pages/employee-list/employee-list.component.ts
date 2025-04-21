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

  deleteEmployee(id: number): void { 
      const employeeName = this.employees.find(emp => emp.id === id)?.name || 'Unknown';
      const confirmDelete = confirm(`User ${employeeName} deleted successfully`);
  if (confirmDelete) {
    this.adminService.deleteEmployee(id);
    this.loadEmployees();  
  } 
}


  editEmployee(id: number): void {
    const updatedEmployee: Employee = { id, name: 'Updated Name', role: 'Updated Role' , email:'updated E-mail'};  
    this.adminService.updateEmployee(id, updatedEmployee);
    this.loadEmployees(); }

  
}
