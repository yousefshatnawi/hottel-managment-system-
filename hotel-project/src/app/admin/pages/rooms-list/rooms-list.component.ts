import { Component } from '@angular/core';
import { AdminService } from '../../services/services/admin.service';
import { Room } from '../../../models/room.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  standalone: false,
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent { 
  rooms: Room[] = [];
   editingRoom: Room | null = null;

  constructor(private adminService: AdminService , private router: Router) {}

  ngOnInit(): void {
    this.rooms = this.adminService.getRooms();
    const newRom = JSON.parse(localStorage.getItem('newRom') || '{}');
    if(newRom && newRom.id){
      this.rooms.push(newRom);
    }
    const updatedRoom = JSON.parse(localStorage.getItem('updateRoom') || '{}');
    if ( updatedRoom.id) {
      const index = this.rooms.findIndex(room => room.id === updatedRoom.id);
      if (index !== -1) {
        this.rooms[index] = updatedRoom;
      }
    
    }
  } 
 

 

  

goToEditRoom(id: number): void {
  this.router.navigate(['/admin/editRoom', id]);
}

    saveEditedRoom(): void {
    if (this.editingRoom) {
      this.adminService.updateRoom(this.editingRoom.id, this.editingRoom);
      this.editingRoom = null;
    }
  }

  cancelEdit(): void {
    this.editingRoom = null;
  } 
  
  bookRoom(id: number): void {
    this.adminService.bookRoomById(id);
    this.rooms = this.adminService.getRooms();
  }
  makeAvailable(roomId: number) {
    this.adminService.releaseRoom(roomId);
    this.rooms = this.adminService.getRooms();
  }

 logout() {
  localStorage.clear();
  this.router.navigate(['/login'])
}

}
