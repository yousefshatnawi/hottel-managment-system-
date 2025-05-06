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
import { RoomListComponent } from './pages/room-list/room-list.component';
import { RoomDetailsComponent } from './pages/room-details/room-details.component';
import { HttpLoaderFactory, SharedModule } from '../layout/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MatPaginatorModule } from '@angular/material/paginator';


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
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
   TranslateModule.forRoot({
     loader: {
       provide: TranslateLoader,
       useFactory: HttpLoaderFactory,
       deps: [HttpClient]
     }
   }), 
    
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
