import { Component } from '@angular/core';
import { AdminService } from '../../services/services/admin.service';
import { Customer } from '../../../models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent { 
   customers: Customer[] = [];

  constructor(private adminService: AdminService ,private router:Router) {}

  ngOnInit(): void {
    this.loadCustomers();
    const newCustomers = JSON.parse(localStorage.getItem('newCustomer') || '{}');
    this.customers = this.adminService.getCustomers();
    if (newCustomers) {
      {
        this.customers.push(newCustomers);
      }
  }
}

  loadCustomers(): void {
    this.customers = this.adminService.getCustomers();
  } 

logout() {
  localStorage.clear();
  this.router.navigate(['/login'])
}



}
