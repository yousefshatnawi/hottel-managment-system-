import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  bookingForm!: FormGroup;
  // rooms = [
  //   { id: 1, title: 'Room 101' },
  //   { id: 2, title: 'Hall A' },
  //   { id: 3, title: 'VIP Room' }
  // ];
 rooms: Room[] = [];


  constructor(private fb: FormBuilder,    private roomService: CustomerService 
  ) {}

  ngOnInit(): void {
    this.rooms=Rooms;
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
        customerId: 1, 
        approvalStatus: 'pending',
        paymentStatus: 'unpaid'
      };

      console.log('Booking Submitted:', formData);

      this.roomService.addRoomAppointment(formData)
        .then((newBooking) => {
          console.log('Booking successfully added:', newBooking);
        })
        .catch((error) => {
          console.error('Error adding booking:', error);
        });
    }
  }
}

