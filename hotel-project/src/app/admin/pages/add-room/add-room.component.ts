import { Component } from '@angular/core';
import { Room } from '../../../models/room.model';
import { AdminService } from '../../services/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  standalone: false,
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.scss'
})
export class AddRoomComponent { 
  newRoom: Room = {
    id: 0,
    title: '',
    roomType: 'room',
    floor: '',
    building: '',
    details: '',
    bookedStatus: false,
    booked: undefined,
  };

  constructor(private adminService: AdminService, private router: Router) {}

  addRoom() {
    const existing = this.adminService.getRooms();
    const newId = existing.length > 0 ? Math.max(...existing.map(r => r.id)) + 1 : 1;
    this.newRoom.id = newId;

    this.adminService.addRoom(this.newRoom);
    this.router.navigate(['/admin/rooms']);
  }

}
