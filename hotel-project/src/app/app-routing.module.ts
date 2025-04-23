import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RoomListComponent } from './customer/pages/room-list/room-list.component';

const routes: Routes = [

  {    path: '', 
       redirectTo: 'home', 
       pathMatch: 'full' 
  },
  {    path:'home',  component: HomeComponent},
  {    path:'about-us',  component: AboutComponent},
  {    path:'contact-us', component: ContactComponent},
  {    path:'room',  component: RoomListComponent},
  {
      path: 'employee', 
      loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) 
  },
  {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
      path: 'customer',
      loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {   
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

