import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Room } from '../../../models/room.model';
import { Rooms } from '../../../shared/dataBase/room';

@Component({
  selector: 'app-room-list',
  standalone: false,
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent implements OnInit {

  roomList :Room []= Rooms
  selectedType: string='';

constructor( private serviceCustomer:CustomerService){}
  ngOnInit(): void {
    const newRom = JSON.parse(localStorage.getItem('newRom') || '{}');
    if(newRom && newRom.id){
      this.roomList.push(newRom);
    }
    const updatedRoom = JSON.parse(localStorage.getItem('updateRoom') || '{}');
    if ( updatedRoom.id) {
      const index = this.roomList.findIndex(room => room.id === updatedRoom.id);
      if (index !== -1) {
        this.roomList[index] = updatedRoom;
      }
    
    }
    console.log(this.roomList)
  }
  filterdata(type: string) {
    this.selectedType = type;
   this.roomList= this.serviceCustomer.filterData(type);
    }
  // filterRooms():Room{
  //   const room=this.serviceCustomer.getAllRoomsApp();
  // }
}
