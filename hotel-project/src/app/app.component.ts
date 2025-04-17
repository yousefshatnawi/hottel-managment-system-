import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ngOnInit(): void {
    
    const currentUser = {
      email: 'employee1@example.com',
      password: '123456',
      userType: 'employee'
    };
  
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
   
    const employees = [
      {
        id: 1,
        name: 'Ahmad Ali',
        role: 'Cleaner',
        email: 'employee1@example.com'
      },
      {
        id: 2,
        name: 'Sara Khaled',
        role: 'Maintenance',
        email: 'employee2@example.com'
      }
    ];
  
    localStorage.setItem('employees', JSON.stringify(employees));
  
    
    const employeeRequests = [
      {
        id: 101,
        date: '2025-04-15',
        customerId: 5,
        employeeId: 1,
        requestType: 'cleaning',
        requestStatus: 'pending'
      },
      {
        id: 102,
        date: '2025-04-16',
        customerId: 7,
        employeeId: 1,
        requestType: 'tv maintenance',
        requestStatus: 'progress'
      }
    ];
  
    localStorage.setItem('employeeRequests', JSON.stringify(employeeRequests));
  }
  
}
