import { Component, OnInit } from '@angular/core';


interface RoomAppointment {
  id: number;
  date: string;
  roomTitle: string;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  paymentStatus: 'unpaid' | 'paid';
  paymentAmount: number;
}

@Component({
  selector: 'app-my-reservations',
  standalone: false,
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.scss'
})
export class MyReservationsComponent implements OnInit {

 myReservations: RoomAppointment[] = [];

  ngOnInit(): void {
    // مؤقتاً بيانات وهمية، لاحقاً بنجيبهم من السيرفس
    this.myReservations = [
      {
        id: 1,
        date: '2025-04-20',
        roomTitle: 'Room 101',
        approvalStatus: 'approved',
        paymentStatus: 'paid',
        paymentAmount: 150
      },
      {
        id: 2,
        date: '2025-05-01',
        roomTitle: 'Hall A',
        approvalStatus: 'pending',
        paymentStatus: 'unpaid',
        paymentAmount: 300
      }
    ];
  }
}
