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
    this.bookingForm = new FormGroup({
      roomId: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  submitBooking() {
    const user = JSON.parse(localStorage.getItem('customer') || 'null');
  
    if (this.bookingForm.valid) {
      const formValue = this.bookingForm.value; 
      console.log("testttttttttttttttt",formValue.roomId)
      console.log(this.rooms)
      const selectedRoom = this.rooms.find(room => room.id == formValue.roomId);
      console.log("selected ",selectedRoom)
      
      const formData = {
        ...formValue,
        customerId: user.id,
        approvalStatus: 'pending',
        paymentStatus: 'unpaid',
        room: selectedRoom   
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
