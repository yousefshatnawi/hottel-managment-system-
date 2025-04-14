import { Component, OnInit } from '@angular/core';


interface RoomServiceRequest {
  id: number;
  date: string;
  requestType: string;
  requestStatus: 'pending' | 'progress' | 'done';
  employeeName?: string;
}


@Component({
  selector: 'app-my-requests',
  standalone: false,
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent implements OnInit{

  myRequests: RoomServiceRequest[] = [];

  ngOnInit(): void {
    // مؤقتاً بيانات وهمية
    this.myRequests = [
      {
        id: 1,
        date: '2025-04-10',
        requestType: 'cleaning',
        requestStatus: 'done',
        employeeName: 'Ahmad'
      },
      {
        id: 2,
        date: '2025-04-12',
        requestType: 'tv maintenance',
        requestStatus: 'progress',
        employeeName: 'Sara'
      },
      {
        id: 3,
        date: '2025-04-13',
        requestType: 'bathroom maintenance',
        requestStatus: 'pending'
      }
    ];
  }
}

