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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from '../layout/shared.module';
import { NgChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    DashboardComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    AddRoomComponent,
    RoomsListComponent,
    CustomerListComponent,
    ReservationsReviewComponent 
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule ,
    FormsModule ,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
    NgChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule  

  ],
})
export class AdminModule { }
