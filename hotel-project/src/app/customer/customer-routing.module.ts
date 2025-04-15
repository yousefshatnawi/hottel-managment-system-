import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { RequestServiceComponent } from './pages/request-service/request-service.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { AuthGuard } from '../auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: { role: 'customer' },
    children: [
      { path: 'book-room', component: BookRoomComponent },
      { path: 'my-requests', component: MyRequestsComponent },
      { path: 'request-service', component: RequestServiceComponent },
      { path: 'my-reservations', component: MyReservationsComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
