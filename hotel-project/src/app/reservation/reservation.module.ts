import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { ReservationsDetailsComponent } from './pages/reservations-details/reservations-details.component';
import { AdminReviewComponent } from './pages/admin-review/admin-review.component';


@NgModule({
  declarations: [
    MyReservationsComponent,
    ReservationsDetailsComponent,
    AdminReviewComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }

export interface Reservation {
  id: number;
  date: string;
  customerId: number;
  roomId: number;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  paymentStatus: 'paid' | 'unpaid';
  paymentAmount: number;
}
