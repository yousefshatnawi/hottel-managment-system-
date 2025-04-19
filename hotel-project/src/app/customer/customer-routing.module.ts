import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { RequestServiceComponent } from './pages/request-service/request-service.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { RoomDetailsComponent } from './pages/room-details/room-details.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: { role: 'customer' },
    children: [
      { path: '', component: BookRoomComponent },
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
  // { path: 'profile', 
  //   component: ProfileComponent 
  // },
  // { path: 'my-reservations', 
  //   component: MyReservationsComponent 
  // },
  // { path: 'book-room', 
  //   component: BookRoomComponent 
  // },
  // { path: 'request-service', 
  //   component: RequestServiceComponent 
  // },
  // { path:'my-requests',
  //   component:MyRequestsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
