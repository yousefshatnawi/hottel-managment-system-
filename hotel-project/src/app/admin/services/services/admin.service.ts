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

  private EMPLOYEES_KEY = 'employees'; 
  private roomKey = 'rooms';
  private customerKey = 'customers';
  private appointmentKey = 'roomAppointments';



  constructor(private storageService: StorageService) { 
     const stored = localStorage.getItem(this.roomKey);
    if (!stored) {
      localStorage.setItem(this.roomKey, JSON.stringify(rooms));
    }
  } 
     addEmployee(newEmp: Employee): void {
    this.employeeList.push(newEmp);
  }
  
    private employeeList: Employee[] = employees;

  getEmployees(): Employee[] {
    return this.employeeList;
  }
    getRooms(): Room[] {
    return JSON.parse(localStorage.getItem(this.roomKey) || '[]');
  }

  addRoom(room: Room): void {
    const current = this.getRooms();
    current.push(room);
    localStorage.setItem(this.roomKey, JSON.stringify(current));
  }
 
    private customerList: Customer[] = customers;

  getCustomers(): Customer[] { 
    return this.customerList;
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
