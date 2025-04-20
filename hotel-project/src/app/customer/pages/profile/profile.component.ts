import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  isEditing = false;
loading = false;
loadingForGet = false;
success: string = '';
errors: string[] = [];

customer: Customer | undefined;
customerData: any = {};

constructor(
  private route: ActivatedRoute,
  private customerService: CustomerService
) {}

ngOnInit(): void {
  this.loadingForGet = true;
  const id = +this.route.snapshot.paramMap.get('id')!;
  if(id){
    this.loadingForGet = true;

  setTimeout(() => {
    this.customer = this.customerService.getcustomerById(id);
    if (this.customer) {
      this.customerData = { ...this.customer };
    }
    this.loadingForGet = false;
  }, 1000);}
  else{
    this.loadingForGet = false;

    const customer = JSON.parse(localStorage.getItem('customer') || '{}');
    console.log('customer is ' , customer)

    this.customerData = customer;
  }
}

enableEdit() {
  this.isEditing = true;
}

saveProfile() {
  this.errors = [];
  this.success = '';
  this.loading = true;

  this.customerService.updateCustomer(this.customerData)
    .then((updated: Customer) => {
      this.customer = updated;
      this.success = 'Customer updated successfully!';
      this.isEditing = false;
      this.loading = false;
    })
    .catch((err: any) => {
      this.errors.push(err);
      this.loading = false;
    });
}

}

