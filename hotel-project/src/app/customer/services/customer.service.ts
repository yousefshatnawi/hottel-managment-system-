import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { customers } from '../../shared/dataBase/customer';
import { RoomAppointment } from '../../models/room-appointment.model';
import { roomAppointments } from '../../shared/dataBase/room-appointment';
import { EmployeeRequest } from '../../models/employee-request.model';
import { employeeRequests } from '../../shared/dataBase/employee-request';
import { User } from '../../models/user.model';
import { users } from '../../shared/dataBase/users';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  getAllCustomers(): Customer[] {
    return customers;
  }
  getAllRequests(): EmployeeRequest[] {
    return employeeRequests;
  }
  getAllRoomsApp(): RoomAppointment[] {
    return roomAppointments;
  }
  addAppointment(appointmentData: any): Promise<RoomAppointment> {
    const allRooms: RoomAppointment[] = this.getAllRoomsApp();

    return new Promise((resolve, reject) => {
      try {
        const newAppointment: RoomAppointment = {
          ...appointmentData,
          id: allRooms.length + 1 // أو أي منطق مناسب لتوليد ID
        };

        allRooms.push(newAppointment);
        resolve(newAppointment);
      } catch (error) {
        reject('Failed to add appointment');
      }
    });
  }
  getcustomerByEmail(id: number): Customer | undefined {
    return customers.find(customers => customers.id === id);
  }
}
