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
   name: string = '';
  role: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  saveEmployee() {
    const newEmployee: Employee = {
      id:0,
      name: this.name,
      role: this.role
    };

    this.adminService.addEmployee(newEmployee).then(() => {
      this.router.navigate(['/admin/employees']);
    });
  }




}
