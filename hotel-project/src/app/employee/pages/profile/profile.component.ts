import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  employeeData: Employee = { id: 0, name: '', role: '',email:'', password:'' }; 
  isEditing = false;
  loading = false;
  success = '';
  errors: string[] = [];

  constructor(private employeeService: EmployeeService ) {}

  ngOnInit(): void {
    const employee = JSON.parse(localStorage.getItem('employee') || '{}');
    this.employeeData = { ...employee }; 
  }

  enableEdit() {
    this.isEditing = true;
  }

  saveProfile() {
    this.errors = [];
    this.success = '';
    this.loading = true;

    this.employeeService
      .updateEmployee(this.employeeData)
      .then((updated: Employee) => {
        this.success = 'Profile updated successfully!';
        this.isEditing = false;
        this.loading = false;
      })
      .catch((err) => {
        this.errors.push(err);
        this.loading = false;
      });
  }
 
}