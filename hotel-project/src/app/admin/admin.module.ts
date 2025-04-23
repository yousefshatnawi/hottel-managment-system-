import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { RoomsListComponent } from './pages/rooms-list/rooms-list.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { ReservationsReviewComponent } from './pages/reservations-review/reservations-review.component';
import { FormsModule } from '@angular/forms'; 

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from '../layout/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    AddRoomComponent,
    RoomsListComponent,
    CustomerListComponent,
    ReservationsReviewComponent ,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule ,
    FormsModule ,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule
    

  ]
})
export class AdminModule { }
