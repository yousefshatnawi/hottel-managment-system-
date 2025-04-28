import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { RoomAppointment } from '../../models/room-appointment.model';
import { roomAppointments } from '../../shared/dataBase/room-appointment';
import { EmployeeRequest } from '../../models/employee-request.model';
import { employeeRequests } from '../../shared/dataBase/employee-request';

import { customers } from '../../shared/dataBase/customer';
import { Employee } from '../../models/employee.model';
import { employees } from '../../shared/dataBase/employee';
import { EmployeeService } from '../../employee/services/employee.service';
import { Rooms } from '../../shared/dataBase/room';
import { Room } from '../../models/room.model';
const CUSTOMERS_KEY = 'CUSTOMERS_KEY';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private employeeService: EmployeeService) { }
  getAllCustomers(): Customer[] {
    return customers;
  }
  getAllEmployee(): Employee[] {
    return employees;
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
        localStorage.setItem('new-reservations', JSON.stringify(newAppointment))

        console.log('all rooms',allRooms)
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
    console.log('تمت إضافة الطلب:', newRequest , typeof(newRequest));
  }
  private requestsEmp: EmployeeRequest[] = employeeRequests;

  addRequestemps(request: EmployeeRequest) {

    const newId = this.requestsEmp.length > 0 ? Math.max(...this.requestsEmp.map(r => r.id)) + 1 : 1;

    const newRequest = {
      ...request,
      id: newId,
      employee:employees.find((employee) => employee.id === request.employeeId)
      };
    localStorage.setItem('updatedRequest', JSON.stringify(newRequest));

    this.requestsEmp.push(newRequest);
    console.log('تمت إضافة الطلب:', newRequest);
  }
  getAllEmployeeRequests() {
    return this.requests;
  }
  getCustomerByemail(email: string): Customer | undefined {
    return customers.find(c => c.email=== email);
  }
  getEmployeeByemail(email: string): Employee | undefined {
    return employees.find(c => c.email=== email);
  }
 
  getResrvtionByCustomer(): RoomAppointment[] {
    const customerString = localStorage.getItem('customer');
    
    if (!customerString) {
      return [];
    }
  
    try {
      const customer = JSON.parse(customerString);
      const id = customer.id;
  
      return roomAppointments.filter(req => req.customerId === id);
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return [];
    }
  }

  getRequestsByEmployee(): EmployeeRequest[] {
    const customerString = localStorage.getItem('customer');
    
    if (!customerString) {
      return [];
    }
  
    try {
      const customer = JSON.parse(customerString);
      const id = customer.id;
  
      return employeeRequests.filter(req => req.customerId === id);
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return [];
    }
  }
  filterData(type: string) {
    let data = Rooms;
  
    if (type === 'room') {
      data = data.filter((room: Room) => room.roomType=== 'room');
    } else if (type === 'hall') {
      data = data.filter((room: Room) => room.roomType === 'hall');
    }
  
    return data;
  }
  
}

