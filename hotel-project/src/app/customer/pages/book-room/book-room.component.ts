import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-room',
  standalone: false,
  templateUrl: './book-room.component.html',
  styleUrl: './book-room.component.scss'
})
export class BookRoomComponent implements OnInit {

  bookingForm!: FormGroup;
  rooms = [
    { id: 1, title: 'Room 101' },
    { id: 2, title: 'Hall A' },
    { id: 3, title: 'VIP Room' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: ['', Validators.required],
      date: ['', Validators.required],
      paymentAmount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  submitBooking() {
    if (this.bookingForm.valid) {
      const formData = {
        ...this.bookingForm.value,
        customerId: 1, // مؤقتاً ثابت، لاحقًا نجيبه من auth
        approvalStatus: 'pending',
        paymentStatus: 'unpaid'
      };

      console.log('Booking Submitted:', formData);
      // لاحقًا نبعثه للسيرفر عن طريق service
    }
  }
}

