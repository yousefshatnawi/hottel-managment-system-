import { Injectable } from '@angular/core';
import { Room } from '../../../models/room.model';
import { Employee } from '../../../models/employee.model';
import { StorageService } from '../localstroge..service';
import { Customer } from '../../../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private EMPLOYEES_KEY = 'employees'; 
private readonly ROOMS_KEY = 'rooms';
  private customerKey = 'customers';


  constructor(private storageService: StorageService) { }

  addEmployee(employee: Employee): Promise<Employee> {
    return new Promise((resolve) => {
      const employees: Employee[] = JSON.parse(localStorage.getItem(this.EMPLOYEES_KEY) || '[]');
  
      const maxId = employees.length > 0 ? Math.max(...employees.map(e => Number(e.id))) : 0;
      employee.id = maxId + 1;
  
      employees.push(employee);
      localStorage.setItem(this.EMPLOYEES_KEY, JSON.stringify(employees));
      resolve(employee);
    });
  }
  

  getEmployees(): Promise<Employee[]> {
    return new Promise((resolve) => {
      const employees = JSON.parse(localStorage.getItem(this.EMPLOYEES_KEY) || '[]');
      resolve(employees);
    });
  }
    getRooms(): Room[] {
    return JSON.parse(localStorage.getItem(this.ROOMS_KEY) || '[]');
  }

   addRoom(room: Room): Promise<Room> {
    return new Promise(resolve => {
      const rooms = this.getRooms();
      room.id = rooms.length + 1;

     
      room.booked       = room.booked       ?? '';
      room.bookedStatus = room.bookedStatus ?? false;

      rooms.push(room);
      localStorage.setItem(this.ROOMS_KEY, JSON.stringify(rooms));
      resolve(room);
    }); 
    
  }

updateRoom(updated: Room): Promise<void> {
    return new Promise(resolve => {
      const rooms = this.getRooms();
      const idx = rooms.findIndex(r => r.id === updated.id);
      if (idx > -1) {
        rooms[idx] = { ...updated };
        localStorage.setItem(this.ROOMS_KEY, JSON.stringify(rooms));
      }
      resolve();
    });
  } 

    getCustomers(): Customer[] {
    const data = localStorage.getItem(this.customerKey);
    return data ? JSON.parse(data) : [];
  }
} 
