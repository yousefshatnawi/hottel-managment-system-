import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { RoomAppointment } from '../../models/room-appointment.model';
import { roomAppointments } from '../../shared/dataBase/room-appointment';
import { EmployeeRequest } from '../../models/employee-request.model';
import { employeeRequests } from '../../shared/dataBase/employee-request';

import { customers } from '../../shared/dataBase/customer';
const CUSTOMERS_KEY = 'CUSTOMERS_KEY';

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
  addRoomAppointment(appointmentData: any): Promise<RoomAppointment> {
    const allRooms: RoomAppointment[] = this.getAllRoomsApp();

    return new Promise((resolve, reject) => {
      try {
        const newAppointment: RoomAppointment = {
          ...appointmentData,
          id: allRooms.length + 1  
        };

        allRooms.push(newAppointment);
        resolve(newAppointment);
      } catch (error) {
        reject('Failed to add appointment');
      }
    });
  }
  getcustomerById(id: number): Customer | undefined {
    return customers.find(customers => customers.id === id);
  }
  updateCustomer(customerUpdate: Customer): Promise<Customer> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const customer: Customer[] = customers;
        const index = customer.findIndex(c => c.id === customerUpdate.id);
  
        if (index !== -1) {
          customer[index] = { ...customerUpdate };
          localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(customer));
          resolve(customer[index]);
        } else {
          reject('Customer does not exist');
        }
      }, 1500);
    });
  }
      private requests: RoomAppointment[] = roomAppointments;

  addRequest(request: RoomAppointment) {

    const newId = this.requests.length > 0 ? Math.max(...this.requests.map(r => r.id)) + 1 : 1;

    const newRequest = {
      ...request,
      id: newId,
      paymentStatus: false,
      paymentAmount: 0
    };

    this.requests.push(newRequest);
    console.log('تمت إضافة الطلب:', newRequest);
  }

  getAllEmployeeRequests() {
    return this.requests;
  }
  getCustomerByemail(email: string): Customer | undefined {
    return customers.find(c => c.email=== email);
  }
  
}
