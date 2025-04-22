import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { RequestServiceComponent } from './pages/request-service/request-service.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';

import { RoomDetailsComponent } from './pages/room-details/room-details.component';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: { role: 'customer' },
    children: [
      { path: '', component: HomeComponent },
      { path: 'book-room', component: BookRoomComponent },
      { path: 'my-requests', component: MyRequestsComponent },
      { path: 'request-service', component: RequestServiceComponent },
      { path: 'my-reservations', component: MyReservationsComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'room', component:RoomListComponent  },
      { path: 'room/:id', component: RoomDetailsComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
