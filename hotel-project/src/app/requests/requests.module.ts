import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { RequestFormComponent } from './pages/request-form/request-form.component';


@NgModule({
  declarations: [
    MyRequestsComponent,
    RequestFormComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule { }
