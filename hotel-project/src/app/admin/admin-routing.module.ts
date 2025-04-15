import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guard/auth.guard';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { ReservationsReviewComponent } from './pages/reservations-review/reservations-review.component';
import { RoomsListComponent } from './pages/rooms-list/rooms-list.component';



const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: { role: 'admin' }, 
    children: [
      {
        path: 'add-employee',
        component: AddEmployeeComponent
      },
      {
        path: 'add-room',
        component: AddRoomComponent
      },
      {
        path: 'customer-list',
        component: CustomerListComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent
      },
      {
        path: 'reservations-review',
        component: ReservationsReviewComponent
      },
      {
        path: 'rooms-list',
        component: RoomsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
