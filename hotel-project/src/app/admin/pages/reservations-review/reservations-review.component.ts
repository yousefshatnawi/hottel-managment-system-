import { Component } from '@angular/core';
import { RoomAppointment } from '../../../models/room-appointment.model';
import { AdminService } from '../../services/services/admin.service';
import { Router } from '@angular/router';
import { CustomerService } from '../../../customer/services/customer.service';
import { customers } from '../../../shared/dataBase/customer';

@Component({
  selector: 'app-reservations-review',
  standalone: false,
  templateUrl: './reservations-review.component.html',
  styleUrl: './reservations-review.component.scss'
})
export class ReservationsReviewComponent { 
   appointments: RoomAppointment[] = [];

  constructor(private adminService: AdminService , private router: Router,  private customerService:CustomerService ) {}

  ngOnInit(): void {
  const newReservtion = JSON.parse(localStorage.getItem('new-reservations') || '{}');
    this.appointments = this.adminService.getAppointments();
    if (newReservtion && newReservtion.id) {
      {
        this.appointments.push(newReservtion);
      }
  }
 const customers=this.customerService.getAllCustomers();

 this.appointments= this.appointments.map((app:RoomAppointment)=>{
    return {
      ...app,
      customer:customers.find((customer) => customer.id === app.customerId)
    }
  })
  console.log(this.appointments)
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
