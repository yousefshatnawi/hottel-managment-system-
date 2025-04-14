import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-service',
  standalone: false,
  templateUrl: './request-service.component.html',
  styleUrl: './request-service.component.scss'
})
export class RequestServiceComponent implements OnInit{

  requestForm!: FormGroup;
  requestTypes = ['cleaning', 'tv maintenance', 'bathroom maintenance'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      requestType: ['', Validators.required],
      note: ['']
    });
  }
  submitRequest() {
    if (this.requestForm.valid) {
      const formData = {
        ...this.requestForm.value,
        customerId: 1, // مؤقتاً ثابت
        employeeId: null, // يتم التعيين لاحقاً من قبل الادمن أو النظام
        date: new Date().toISOString(),
        requestStatus: 'pending'
      };

      console.log('Request Sent:', formData);
      // لاحقاً نستخدم service لإرسال الطلب
    }
  }
}
