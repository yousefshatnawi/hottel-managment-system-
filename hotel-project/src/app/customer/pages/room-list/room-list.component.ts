import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Room } from '../../../models/room.model';
import { Rooms } from '../../../shared/dataBase/room';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-room-list',
  standalone: false,
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent implements OnInit {

  
  roomList: Room[] = Rooms;
  selectedType: string = '';

  paginatedRoomList: Room[] = [];
  pageSize = 6;
  pageIndex = 0;
  length = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private serviceCustomer: CustomerService,
    private languageService: LanguageService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    const newRom = JSON.parse(localStorage.getItem('newRom') || '{}');
    if (newRom && newRom.id) {
      this.roomList.push(newRom);
    }

    const updatedRoom = JSON.parse(localStorage.getItem('updateRoom') || '{}');
    if (updatedRoom.id) {
      const index = this.roomList.findIndex(room => room.id === updatedRoom.id);
      if (index !== -1) {
        this.roomList[index] = updatedRoom;
      }
    }

    console.log(this.roomList);

    this.languageService.currentLanguage.subscribe(language => {
      this.translate.use(language);
    });

    this.length = this.roomList.length;
    this.updatePaginatedData();
  }

  filterdata(type: string) {
    this.selectedType = type;
    this.roomList = this.serviceCustomer.filterData(type);
    this.length = this.roomList.length;
    this.pageIndex = 0;
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedRoomList = this.roomList.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedData();
  }
}