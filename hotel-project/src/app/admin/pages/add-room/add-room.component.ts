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
  room: Room = {
    booked: '',            
    id: 0,                  
    title: '',
    roomType: 'room',       
    floor: '',             
    building: '',
    details: '',
    bookedStatus: false    
  };

  constructor(private adminService: AdminService , private router: Router) { }

  onSubmit(): void {

    this.room.booked       = this.room.booked       ?? '';
    this.room.bookedStatus = this.room.bookedStatus ?? false;

    this.adminService.addRoom(this.room).then(() => {
      alert('Room added successfully!');
    
      this.room = {
        booked: '',
        id: 0,
        title: '',
        roomType: 'room',
        floor: '',
        building: '',
        details: '',
        bookedStatus: false
      };
    });
        this.adminService.addRoom(this.room).then(() => {
      this.router.navigate(['/admin/rooms']);
  });
  }

}
