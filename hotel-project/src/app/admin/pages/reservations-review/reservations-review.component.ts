import { Component } from '@angular/core';
import { RoomAppointment } from '../../../models/room-appointment.model';
import { AdminService } from '../../services/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations-review',
  standalone: false,
  templateUrl: './reservations-review.component.html',
  styleUrl: './reservations-review.component.scss'
})
export class ReservationsReviewComponent { 
   appointments: RoomAppointment[] = [];

  constructor(private adminService: AdminService , private router: Router ) {}

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
  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
