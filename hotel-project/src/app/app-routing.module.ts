import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { RoomComponent } from './rooms/room/room.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
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
