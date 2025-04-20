import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
<<<<<<< HEAD
import { AuthGuard } from '../auth/guard/auth.guard';


=======
import { authGuard } from '../auth/guard/auth.guard';
import { DashboardEmployeeComponent } from './pages/dashboard-employee/dashboard-employee.component';
import { LoginComponent } from '../auth/components/login/login.component';
>>>>>>> reema

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    canActivate: [AuthGuard],
    data: { role: 'employee' }, 
    children: [
      { 
        path: 'profile', 
        component: ProfileComponent 
      },
      { 
        path: 'my-requests', 
        component: MyRequestsComponent 
      },
      { 
        path: 'request-details/:id', 
        component: RequestDetailsComponent 
      }
    ]
  },
 ];

=======
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
>>>>>>> reema

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
