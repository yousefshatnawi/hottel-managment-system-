import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { RequestFormComponent } from './pages/request-form/request-form.component';

const routes: Routes = [
  { path: 'my-requests', 
    component: MyRequestsComponent 
  },
  { path: 'new-request', 
    component: RequestFormComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
