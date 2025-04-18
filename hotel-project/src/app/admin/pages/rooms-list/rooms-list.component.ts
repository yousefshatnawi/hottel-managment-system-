import { Component } from '@angular/core';
import { AdminService } from '../../services/services/admin.service';
import { Room } from '../../../models/room.model';

@Component({
  selector: 'app-rooms-list',
  standalone: false,
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent { 
  rooms: Room[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.rooms = this.adminService.getRooms();
  }

  bookRoom(id: number): void {
    this.adminService.bookRoomById(id);
    this.rooms = this.adminService.getRooms();
  }


}
