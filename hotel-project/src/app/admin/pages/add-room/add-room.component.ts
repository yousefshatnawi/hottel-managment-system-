import { Component } from '@angular/core';
import { Room } from '../../../models/room.model';
import { AdminService } from '../../services/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  standalone: false,
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.scss'
})
export class AddRoomComponent { 
 room: Room = {
    id: 0,
    title: '',
    building: '',
    floor: '',
    details: '',
    roomType: 'room',
    bookedStatus: false,
    booked: undefined,
           paymentAmount: 0,

  };

  isEditMode = false;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const roomId = Number(this.route.snapshot.paramMap.get('id'));
    if (roomId) {
      const existingRoom = this.adminService.getRoomById(roomId);
      if (existingRoom) {
        this.room = { ...existingRoom };
        this.isEditMode = true;
      }
    }
  }

  saveRoom(): void {
    if (this.isEditMode) {
     this.adminService.updateRoom(this.room.id, this.room)
  .then(() => {
    console.log('Room updated successfully');
  })
  .catch(error => {
    console.error('Error updating room:', error);
  });

    } else {
      this.room.id = Date.now(); 
      this.adminService.addRoom(this.room);
    }

    this.router.navigate(['/admin/rooms']);
  }
}
