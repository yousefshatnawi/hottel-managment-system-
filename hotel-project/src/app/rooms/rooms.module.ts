import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomListComponent } from './component/room-list/room-list.component';
import { RoomDetailsComponent } from './component/room-details/room-details.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { EditRoomComponent } from './pages/edit-room/edit-room.component';
import { RoomComponent } from './room/room.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';


@NgModule({
  declarations: [
    RoomListComponent,
    RoomDetailsComponent,
    AddRoomComponent,
    EditRoomComponent,
    RoomComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }

export interface Room {
  id: number;
  title: string;
  roomType: 'room' | 'hall';
  floor: number;
  building: string;
  details: string;
  bookedStatus: boolean;
}
