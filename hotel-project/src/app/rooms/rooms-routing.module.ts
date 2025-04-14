import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomDetailsComponent } from './component/room-details/room-details.component';
import { RoomListComponent } from './component/room-list/room-list.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { EditRoomComponent } from './pages/edit-room/edit-room.component';

const routes: Routes = [
  { path: 'list', 
    component: RoomListComponent 
  },
  { path: 'details/:id', 
    component: RoomDetailsComponent 
  },
  { path: 'add', 
    component: AddRoomComponent 
  },
  { path: 'edit/:id', 
    component: EditRoomComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
