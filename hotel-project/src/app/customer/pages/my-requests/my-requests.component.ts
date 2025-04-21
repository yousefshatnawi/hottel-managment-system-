import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { employeeRequests } from '../../../shared/dataBase/employee-request';
import { CustomerService } from '../../services/customer.service';
import { EmployeeRequest } from '../../../models/employee-request.model';
import { Customer } from '../../../models/customer.model';
import { customers } from '../../../shared/dataBase/customer';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


// interface RoomServiceRequest {
//   id: number;
//   date: string;
//   requestType: string;
//   requestStatus: 'pending' | 'progress' | 'done';
//   employeeName?: string;
// }


@Component({
  selector: 'app-my-requests',
  standalone: false,
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent implements OnInit{
  myRequests: EmployeeRequest[] = [];

  constructor(
    private requestService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadRequests();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadRequests();
    });
  }

  loadRequests(): void {
    this.myRequests = this.requestService.getRequestsByEmployee();
    console.log('Loaded requests:', JSON.stringify(this.myRequests, null, 2));
    this.cdr.detectChanges(); // إجبار تحديث الواجهة
  }

  @HostListener('window:focus', ['$event'])
  onFocus(event: Event): void {
    this.loadRequests();
  }

  private getCustomerId(): number {
    const customer = JSON.parse(localStorage.getItem('customer') || '{}');
    return customer.id || 0;
  }
}


      // this.myRequests = [
    //   {
    //     id: 1,
    //     date: '2025-04-10',
    //     requestType: 'cleaning',
    //     requestStatus: 'done',
    //     employeeName: 'Ahmad'
    //   },
    //   {
    //     id: 2,
    //     date: '2025-04-12',
    //     requestType: 'tv maintenance',
    //     requestStatus: 'progress',
    //     employeeName: 'Sara'
    //   },
    //   {
    //     id: 3,
    //     date: '2025-04-13',
    //     requestType: 'bathroom maintenance',
    //     requestStatus: 'pending'
    //   }
    // ];

  