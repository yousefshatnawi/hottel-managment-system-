import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { authGuard } from '../auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    data: { role: 'employee' },
    children: [
  
  { path: 'profile', 
    component: ProfileComponent 
  },
  { path: 'employee/my-requests', 
    component: MyRequestsComponent, 
    canActivate: [authGuard] 
  },

  { path: 'employee-request/:id',
     component: RequestDetailsComponent, 
     canActivate: [authGuard]
    
  }


]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
