import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MyRequestsComponent,
    RequestDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
