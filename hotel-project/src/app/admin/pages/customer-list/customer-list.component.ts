import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AdminService } from '../../services/services/admin.service';
import { Customer } from '../../../models/customer.model';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements AfterViewInit { 
   customers: Customer[] = [];
   displayedColumns: string[] = ['name', 'phone', 'email', 'address'];
   dataSource = new MatTableDataSource<Customer>(this.customers);
 


   @ViewChild(MatPaginator) paginator!: MatPaginator;
 constructor(private adminService: AdminService ,private router:Router) {}
   ngAfterViewInit(): void {
     this.dataSource.paginator = this.paginator;
   }
 
  

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
    this.customers = this.dataSource.data = this.customers;
  } 

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
