import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

const CUSTOMERS_KEY = 'CUSTOMERS_KEY';

@Component({
  selector: 'app-request-service',
  standalone: false,
  templateUrl: './request-service.component.html',
  styleUrl: './request-service.component.scss'
})
export class RequestServiceComponent implements OnInit{

  requestForm!: FormGroup;
  requestTypes = ['cleaning' , 'tv maintenance' , 'bathroom maintenance','Laundry','Hire Driver' ,'Bar & Drink','Catering Service' ,'Babysitting','Travel Plan'];

  constructor(private fb: FormBuilder , 
      private customerService: CustomerService,
     ) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      requestType: ['', Validators.required],
      note: ['']
    });
  }
  submitRequest() {
    const randomEmployeeId = Math.floor(Math.random() * 5) + 1;
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const customer = JSON.parse(localStorage.getItem('customer') || '{}');


    
    if (this.requestForm.valid) {
      const formData = {
        ...this.requestForm.value,
        customerId: customer.id,
        employeeId: randomEmployeeId,
        date: new Date().toISOString(),
        requestStatus: 'pending'
      };
  
      this.customerService.addRequestemps(formData);
      this.requestForm.reset();

    }
  }
}
