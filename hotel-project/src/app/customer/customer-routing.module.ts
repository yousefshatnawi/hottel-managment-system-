import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { RequestServiceComponent } from './pages/request-service/request-service.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';

const routes: Routes = [
  { path: 'profile', 
    component: ProfileComponent 
  },
  { path: 'my-reservations', 
    component: MyReservationsComponent 
  },
  { path: 'book-room', 
    component: BookRoomComponent 
  },
  { path: 'request-service', 
    component: RequestServiceComponent 
  },
  { path:'my-requests',
    component:MyRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
