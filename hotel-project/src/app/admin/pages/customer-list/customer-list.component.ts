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

}
