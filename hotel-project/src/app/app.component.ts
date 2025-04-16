import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ngOnInit(): void {
    // إنشاء داتا وهمية للمستخدم الحالي (الموظف)
    const currentUser = {
      email: 'employee1@example.com',
      password: '123456',
      userType: 'employee'
    };
  
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
    // إنشاء داتا وهمية للموظفين
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
  
    // إنشاء داتا وهمية لطلبات الموظف
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
