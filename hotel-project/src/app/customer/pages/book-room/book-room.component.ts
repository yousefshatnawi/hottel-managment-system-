import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Room } from '../../../models/room.model';
import { Rooms } from '../../../shared/dataBase/room';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-book-room',
  standalone: false,
  templateUrl: './book-room.component.html',
  styleUrl: './book-room.component.scss'
})
export class BookRoomComponent implements OnInit {
  @Input() disabled: boolean = false;

  bookingForm!: FormGroup;
  rooms: Room[] = [];

  constructor(
    private roomService: CustomerService
  ) {}

  ngOnInit(): void {
    this.rooms = Rooms;
    // هنا استخدمنا FormGroup و FormControl بدون FormBuilder
    this.bookingForm = new FormGroup({
      roomId: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      // paymentAmount: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  submitBooking() {
    if (this.bookingForm.valid) {
      const formData = {
        ...this.bookingForm.value,
        customerId: 1,
        approvalStatus: 'pending',
        paymentStatus: 'unpaid'
      };
      console.log('Booking Submitted:', formData);
      this.roomService.addRoomAppointment(formData)
        .then((newBooking) => {
          console.log('Booking successfully added:', newBooking);
          this.bookingForm.reset();
        })
        .catch((error) => {
          console.error('Error adding booking:', error);
        });
    }
  }
}
