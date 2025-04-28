import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { RequestServiceComponent } from './pages/request-service/request-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { CustomerService } from './services/customer.service';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { RoomDetailsComponent } from './pages/room-details/room-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../layout/shared.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProfileComponent,
    MyReservationsComponent,
    BookRoomComponent,
    RequestServiceComponent,
    MyRequestsComponent,
    RoomListComponent,
    RoomDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    CommonModule,
    SharedModule,
    MatDialogModule
    
  ],
  exports: [
    ProfileComponent, 
    MyReservationsComponent,
    BookRoomComponent,
    RequestServiceComponent,
    MyRequestsComponent,
    RoomListComponent,
    RoomDetailsComponent
  ],
  
})
export class CustomerModule { }
