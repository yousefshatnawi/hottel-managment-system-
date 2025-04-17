import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
 
  employee: Employee | null = null; 
  employees: Employee[] = [];

  constructor() {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.employees = JSON.parse(localStorage.getItem('employees') || '[]');

    const found = this.employees.find(emp => emp.email === currentUser.email);
    if (found) {
      this.employee = { ...found };
    }
  }

  updateProfile(): void {
    if (!this.employee) return;

    const index = this.employees.findIndex(emp => emp.id === this.employee!.id);
    if (index !== -1) {
      this.employees[index] = { ...this.employee };
      localStorage.setItem('employees', JSON.stringify(this.employees));
      alert('Profile updated successfully!');
    }
  }
}