import { Component } from '@angular/core';
import { RoomAppointment } from '../../../models/room-appointment.model';
import { AdminService } from '../../services/services/admin.service';

@Component({
  selector: 'app-reservations-review',
  standalone: false,
  templateUrl: './reservations-review.component.html',
  styleUrl: './reservations-review.component.scss'
})
export class ReservationsReviewComponent { 
   appointments: RoomAppointment[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
  const newReservtion = JSON.parse(localStorage.getItem('new-reservations') || '{}');
    this.appointments = this.adminService.getAppointments();
    if (newReservtion) {
      {
        this.appointments.push(newReservtion);
      }
  }
}

  approveReservation(id: number): void {
    this.adminService.updateApprovalStatus(id, 'approved');
    
  }

  rejectReservation(id: number): void {
    this.adminService.updateApprovalStatus(id, 'rejected');
  }

}
