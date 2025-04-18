import { Component } from '@angular/core';
import { AdminService } from '../../services/services/admin.service';
import { Router } from '@angular/router';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent { 
 newEmployee: Employee = {
    id: 0,
    name: '',
    role: 'employee'
  };

  constructor(private adminService: AdminService, private router: Router) {}

  addEmployee() {
    const currentEmployees = this.adminService.getEmployees();
const ids = currentEmployees.map(e => e.id || 0); 
const maxId = ids.length > 0 ? Math.max(...ids) : 0;
this.newEmployee.id = maxId + 1;
    this.adminService.addEmployee(this.newEmployee);
    this.router.navigate(['/admin/employees']);
  }}
  





