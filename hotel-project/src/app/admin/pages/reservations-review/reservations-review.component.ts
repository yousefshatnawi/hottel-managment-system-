import { Component } from '@angular/core';
import { RoomAppointment } from '../../../models/room-appointment.model';
import { AdminService } from '../../services/services/admin.service';
import { Router } from '@angular/router';
import { CustomerService } from '../../../customer/services/customer.service';
import { customers } from '../../../shared/dataBase/customer';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-reservations-review',
  standalone: false,
  templateUrl: './reservations-review.component.html',
  styleUrl: './reservations-review.component.scss'
})
export class ReservationsReviewComponent { 


appointments: RoomAppointment[] = [];
pagedAppointments: RoomAppointment[] = [];
pageSize = 6;
currentPage = 0;

constructor(
  private adminService: AdminService,
  private router: Router,
  private customerService: CustomerService
) {}

ngOnInit(): void {
  const newReservtion = JSON.parse(localStorage.getItem('new-reservations') || '{}');
  this.appointments = this.adminService.getAppointments();

  if (newReservtion && newReservtion.id) {
    this.appointments.push(newReservtion);
  }

  const customers = this.customerService.getAllCustomers();

  this.appointments = this.appointments.map((app: RoomAppointment) => {
    return {
      ...app,
      customer: customers.find((customer) => customer.id === app.customerId)
    };
  });

  this.updatePagedAppointments();
  console.log(this.appointments);
}

onPageChange(event: PageEvent): void {
  this.pageSize = event.pageSize;
  this.currentPage = event.pageIndex;
  this.updatePagedAppointments();
}

updatePagedAppointments(): void {
  const startIndex = this.currentPage * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.pagedAppointments = this.appointments.slice(startIndex, endIndex);
}

approveReservation(id: number): void {
  this.adminService.updateApprovalStatus(id, 'approved');
}

rejectReservation(id: number): void {
  this.adminService.updateApprovalStatus(id, 'rejected');
}
}