import { Component, OnInit } from '@angular/core';
import { RoomAppointment } from '../../../models/room-appointment.model';
import { roomAppointments } from '../../../shared/dataBase/room-appointment';
import { CustomerModule } from '../../customer.module';
import { customers } from '../../../shared/dataBase/customer';
import { Customer } from '../../../models/customer.model';
import { CustomerService } from '../../services/customer.service';



@Component({
  selector: 'app-my-reservations',
  standalone: false,
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.scss'
})
export class MyReservationsComponent implements OnInit {
constructor(private requestService: CustomerService){}
 myReservations: RoomAppointment[] = [];
  ngOnInit(): void {

 this.myReservations = this.requestService.getResrvtionByEmployee();  
  }
}
