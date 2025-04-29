import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../services/services/admin.service';
import { Employee } from '../../../models/employee.model';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit ,AfterViewInit {
  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'role'];
  dataSource = new MatTableDataSource<Employee>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  ngAfterViewInit() {
    // ربط البيجنيتور سيتم بعد تحميل الداتا
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  async loadEmployees(): Promise<void> {
    this.employees = await this.adminService.getEmployees();
    this.dataSource.data = this.employees; // هنا نربط الداتا بعد ما تجي
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
 
  

 
}
