import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { FormsModule } from '@angular/forms';
import { DashboardEmployeeComponent } from './pages/dashboard-employee/dashboard-employee.component';
import { SharedModule } from "../layout/shared.module";




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
    SharedModule
]
  
})
export class EmployeeModule { }
