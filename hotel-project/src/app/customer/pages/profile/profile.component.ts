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
  customer: Customer | undefined;

  constructor(
    private route: ActivatedRoute, 
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this.customer = this.customerService.getcustomerByEmail(id);
  }

  enableEdit() {
    this.isEditing = true;
  }

  saveProfile() {
    if (this.customer) {
      // قم بتحديث بيانات العميل في الخدمة (إذا كنت تريد تعديل البيانات)
      // هذا الجزء يعتمد على كيفية تصميم خدمة العميل لديك
      // مثال:
      // this.customerService.updateCustomer(this.customer);

      console.log('Saved', this.customer);
      this.isEditing = false;
    } else {
      console.log('Customer data not found.');
    }
  }
}

