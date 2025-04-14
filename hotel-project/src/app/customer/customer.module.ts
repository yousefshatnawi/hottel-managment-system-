import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { RequestServiceComponent } from './pages/request-service/request-service.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    MyReservationsComponent,
    BookRoomComponent,
    RequestServiceComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomerModule { }
