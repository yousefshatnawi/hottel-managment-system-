import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { FormsModule } from '@angular/forms';
import { DashboardEmployeeComponent } from './pages/dashboard-employee/dashboard-employee.component';
import { SharedModule } from "../layout/shared.module";
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ProfileComponent,
    MyRequestsComponent,
    RequestDetailsComponent,
    DashboardEmployeeComponent,
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
]
  
})
export class EmployeeModule { }
