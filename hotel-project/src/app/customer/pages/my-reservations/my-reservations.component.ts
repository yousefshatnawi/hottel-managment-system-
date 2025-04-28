import { Component, OnInit } from '@angular/core';
import { RoomAppointment } from '../../../models/room-appointment.model';
import { roomAppointments } from '../../../shared/dataBase/room-appointment';
import { CustomerModule } from '../../customer.module';
import { customers } from '../../../shared/dataBase/customer';
import { Customer } from '../../../models/customer.model';
import { CustomerService } from '../../services/customer.service';
import { RequestServiceComponent } from '../request-service/request-service.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-my-reservations',
  standalone: false,
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.scss'
})
export class MyReservationsComponent implements OnInit {

constructor(private requestService: CustomerService
  ,    private dialog: MatDialog  // ✨ أضفناه هون

){}
 myReservations: RoomAppointment[] = [];
  ngOnInit(): void {

const newReservtion = JSON.parse(localStorage.getItem('new-reservations') || '{}');
 this.myReservations = this.requestService.getResrvtionByCustomer();  
 if (newReservtion && newReservtion.id) {
  {
    this.myReservations.push(newReservtion);
  }
  
}
}
reqestService() {
  this.dialog.open(RequestServiceComponent, {
        width: '500px',  // عرض المودال
        height: '500px'  // ارتفاع المودال
      });}

}
