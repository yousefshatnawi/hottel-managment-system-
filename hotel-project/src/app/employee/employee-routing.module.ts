import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';

const routes: Routes = [
  { path: 'profile', 
    component: ProfileComponent 
  },
  { path: 'my-requests', 
    component: MyRequestsComponent 
  },
  { path: 'request-details/:id', 
    component: RequestDetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
