import { Component } from '@angular/core';
import { Room } from '../../../models/room.model';
import { Rooms } from '../../../shared/dataBase/room';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  standalone: false,
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.scss'
})
export class RoomDetailsComponent {
  room: Room | undefined;
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    const roomId = +this.route.snapshot.paramMap.get('id')!;
    this.room = Rooms.find(r => r.id === roomId);
  }

}
