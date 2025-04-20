import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { RoomComponent } from './rooms/room/room.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

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
      path:'request', 
      loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule)},
  {   
      path:'reservations', 
      loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)
  },
  { 
      path:'room', 
      loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule)
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
    path:'room',
    component: RoomComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

