import { Component } from '@angular/core';
import { AdminService } from '../../services/services/admin.service';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent { 
   customers: Customer[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customers = this.adminService.getCustomers();
  } 

 deleteCustomer(id: number): void {
    const customer = this.customers.find(c => c.id === id);
    const confirmDelete = confirm(`User ${customer?.name} deleted successfully`);
  if (confirmDelete) {
    this.adminService.deleteCustomer(id);
    this.loadCustomers(); 
  }
}



}
