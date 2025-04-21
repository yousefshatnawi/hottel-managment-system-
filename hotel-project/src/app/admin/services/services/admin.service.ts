import { Injectable } from '@angular/core';
import { Room } from '../../../models/room.model';
import { Employee } from '../../../models/employee.model';
import { StorageService } from '../localstroge..service';
import { Customer } from '../../../models/customer.model';
import { rooms } from '../dataBase/room';
import { employees } from '../dataBase/employee';
import { customers } from '../dataBase/customer';
import { roomAppointments } from '../dataBase/room-appointment';
import { RoomAppointment } from '../../../models/room-appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 private appointmentKey = 'roomAppointments';

 private employeeList: Employee[] = [...employees]; 

 private customers: Customer[] = [...customers]; 

  private rooms: Room[] = [...rooms];


  constructor(private storageService: StorageService) { 
  } 


   getEmployees(): Employee[] {
    return this.employeeList;
  }

     addEmployee(newEmp: Employee): void {
    this.employeeList.push(newEmp);
  }


    deleteEmployee(id: number): void {
    this.employeeList = this.employeeList.filter(emp => emp.id !== id);
    }

 updateEmployee(id: number, updated: Employee): void {
  const index = this.employeeList.findIndex(e => e.id === id);
  if (index !== -1) {
    this.employeeList[index] = { ...updated };
  }
}


  getCustomers(): Customer[] {
    return this.customers;
  }

  deleteCustomer(id: number): void {
    this.customers = this.customers.filter(c => c.id !== id);
  }
   
 getRoomById(id: number): Room | undefined {
  return this.rooms.find(r => r.id === id);
}

addRoom(room: Room): void {
  this.rooms.push(room);
}

updateRoom(id: number, updatedRoom: Room): void {
  const index = this.rooms.findIndex(room => room.id === id);
  if (index !== -1) {
    this.rooms[index] = { ...updatedRoom };
  }
}

releaseRoom(roomId: number) {
  const rooms = this.getRooms();
  const room = rooms.find(r => r.id === roomId);

  if (room) {
    room.bookedStatus = false; 
    localStorage.setItem('rooms', JSON.stringify(rooms));
  }
}


  getRooms(): Room[] {
    return this.rooms;
  }

  bookRoomById(id: number): void {
  const currentRooms = this.getRooms();
  const room = currentRooms.find(r => r.id === id);
  if (room && !room.bookedStatus) {
    room.bookedStatus = true;
    localStorage.setItem('rooms', JSON.stringify(currentRooms));
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
  } 

} 
