import { Component, OnInit } from '@angular/core';
import { RoomAppointment } from '../../../models/room-appointment.model';
import { roomAppointments } from '../../../shared/dataBase/room-appointment';



@Component({
  selector: 'app-my-reservations',
  standalone: false,
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.scss'
})
export class MyReservationsComponent implements OnInit {

 myReservations: RoomAppointment[] = [];

  ngOnInit(): void {
 this.myReservations = roomAppointments;  
  }
}
