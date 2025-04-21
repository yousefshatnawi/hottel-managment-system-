import { Component } from '@angular/core';
import { AdminService } from '../../services/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent { 
 id: number | null = null;
  newEmployee: Employee = { id: 0, name: '', role: '' };

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
this.adminService.getEmployees()
  .then(employees => {
    console.log('Employees:', employees);
    const emp = employees.find(e => e.id === this.id);
    if (emp) {
      this.newEmployee = { ...emp }; 
    }
  })
  .catch(error => {
    console.error('Error fetching employees:', error);
  });
    
    }
  }

 addEmployee(): void {
  if (this.id) {
    this.adminService.updateEmployee(this.id, this.newEmployee)
  .then(() => {
    console.log('Employee updated successfully');
  })
  .catch(error => {
    console.error('Error updating employee:', error);
  });
  } else {

  this.adminService.getEmployees()
    .then(employees => {
      console.log('Employees:', employees);

      const newId = employees.length > 0
        ? Math.max(...employees.map((e: Employee) => e.id || 0)) + 1
        : 1;

      this.newEmployee.id = newId;
      this.adminService.addEmployee(this.newEmployee);
      this.router.navigate(['/admin/employees']);
    })
    .catch(error => {
      console.error('Error fetching employees:', error);
    });


    this.adminService.addEmployee(this.newEmployee);
  }

  this.router.navigate(['/admin/employees']); 
}
}
  





