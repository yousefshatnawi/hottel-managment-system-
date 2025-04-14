import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminReviewComponent } from './pages/admin-review/admin-review.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { ReservationsDetailsComponent } from './pages/reservations-details/reservations-details.component';

const routes: Routes = [
  { path: 'my', 
    component: MyReservationsComponent 
  },
  { path: 'details/:id', 
    component: ReservationsDetailsComponent 
  },
  { path: 'review', 
    component: AdminReviewComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
