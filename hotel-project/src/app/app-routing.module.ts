import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RoomListComponent } from './customer/pages/room-list/room-list.component';

const routes: Routes = [

  {   path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full' 
  },
  // {
  //     path: 'auth',
  //     component: AuthLayoutComponent,
  //     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  // },
  // {   
  //     path: 'admin', 
  //     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  // },
  // {  
  //     path:'custom',
  //     loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)
  // },
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
    path: '',
    component:HomeComponent
  },
  
  {
    path:'home',
    component: HomeComponent
  }
 
  ,
  {
    path:'about-us',
    component: AboutComponent
  }
  ,
  {
    path:'contact',
    component: ContactComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'auth',
     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  {
    path:'room',
    component: RoomListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

