import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { FormsModule } from '@angular/forms';
import { DashboardEmployeeComponent } from './pages/dashboard-employee/dashboard-employee.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MyRequestsComponent,
    RequestDetailsComponent,
    DashboardEmployeeComponent,
    // SidebarComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
  ]
  
})
export class EmployeeModule { }
