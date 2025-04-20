import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Room } from '../../../models/room.model';
import { Rooms } from '../../../shared/dataBase/room';

@Component({
  selector: 'app-room-list',
  standalone: false,
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent {

constructor( serviceCustomer:CustomerService){}
roomList :Room []= Rooms
 
}
