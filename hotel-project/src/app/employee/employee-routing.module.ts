import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { authGuard } from '../auth/guard/auth.guard';
import { DashboardEmployeeComponent } from './pages/dashboard-employee/dashboard-employee.component';
import { LoginComponent } from '../auth/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    data: { role: 'employee' }, 
    children: [
      { path: 'employee/dashboard', component: DashboardEmployeeComponent },
      { path: 'employee/profile', component: ProfileComponent },
      { path: 'employee/request', component: MyRequestsComponent },
      { path: 'request/:id', component: RequestDetailsComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
