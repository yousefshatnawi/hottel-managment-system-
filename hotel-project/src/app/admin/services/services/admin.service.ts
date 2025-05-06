import { Injectable } from '@angular/core';
import { Room } from '../../../models/room.model';
import { Employee } from '../../../models/employee.model';
import { StorageService } from '../localstroge..service';
import { Customer } from '../../../models/customer.model';

import { RoomAppointment } from '../../../models/room-appointment.model';
import { customers } from '../../../shared/dataBase/customer';
import { employees } from '../../../shared/dataBase/employee';
import { roomAppointments } from '../../../shared/dataBase/room-appointment';
import { Rooms } from '../../../shared/dataBase/room';
import { User } from '../../../models/user.model';
import { users } from '../../../shared/dataBase/users';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 private appointmentKey = 'roomAppointments';

 private employeeList: Employee[] = [...employees]; 

 private customers: Customer[] = [...customers]; 

  private room: Room[] = Rooms;

  private users: User[] =users;

  constructor(private storageService: StorageService) { 
  } 




getEmployees(): Promise<Employee[]> {
  return new Promise((resolve) => {
    const localEmployees = JSON.parse(localStorage.getItem('EMPLOYEES_KEY') || '[]');
    if (localEmployees.length > 0) {
      resolve(localEmployees);
    } else {
      resolve(this.employeeList);
    }
  });
}



     addEmployee(newEmp: Employee): void {
    this.employeeList.push(newEmp);
  }



updateEmployee(id: number, updated: Employee): Promise<void> {
  return new Promise((resolve, reject) => {
    const index = this.employeeList.findIndex(e => e.id === id);
    if (index !== -1) {
      this.employeeList[index] = { ...updated };
      resolve();
    } else {
      reject(`Employee with ID ${id} not found.`);
    }
  });
}


getCustomers(): Customer[] {
  const customersString = localStorage.getItem('CUSTOMERS_KEY');
  if (customersString) {
    return JSON.parse(customersString);
  }
  return this.customers;
}


  getAllUser(): User[] {
    return this.users;
  }
  deleteCustomer(id: number): void {
    this.customers = this.customers.filter(c => c.id !== id);
  }
   
 getRoomById(id: number): Room | undefined {
  return this.room.find(r => r.id === id);
}

addRoom(room: Room): void {
  this.room.push(room);
  localStorage.setItem('newRom',JSON.stringify(room))
}

updateRoom(id: number, updatedRoom: Room): Promise<void> {
  return new Promise((resolve, reject) => {
    const index = this.room.findIndex(room => room.id === id);
    if (index !== -1) {
      this.room[index] = { ...updatedRoom };
      localStorage.setItem('updateRoom',JSON.stringify(this.room[index]))

      resolve();
    } else {
      reject(`Room with ID ${id} not found.`);
    }
  });
}


releaseRoom(roomId: number) {
  const rooms = this.getRooms();
  const room = rooms.find(r => r.id === roomId);

  if (room) {
    room.bookedStatus = false; 
    localStorage.setItem('updateRoom', JSON.stringify(room));
  }
}


  getRooms(): Room[] {
    return this.room;
  }

  bookRoomById(id: number): void {
  const currentRooms = this.getRooms();
  const room = currentRooms.find(r => r.id === id);
  if (room && !room.bookedStatus) {
    room.bookedStatus = true;
    localStorage.setItem('updateRoom', JSON.stringify(room));
  }
  }

    private appointments: RoomAppointment[] = roomAppointments;


 getAppointments(): RoomAppointment[] {
    return this.appointments;
  }

  getAppointmentsByCustomerId(customerId: number): RoomAppointment[] {
    return this.appointments.filter(a => a.customerId === customerId);
  }

  updateApprovalStatus(id: number, status: 'approved' | 'rejected'): void {
    const index = this.appointments.findIndex(a => a.id === id);
    if (index !== -1) {
      this.appointments[index].approvalStatus = status;
    }
    localStorage.setItem('new-reservations', JSON.stringify(this.appointments[index]));
  } 

} 
