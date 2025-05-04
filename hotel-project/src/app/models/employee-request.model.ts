import { Customer } from "./customer.model";
import { Employee } from "./employee.model";
import { RoomAppointment } from "./room-appointment.model";

export interface EmployeeRequest {
    id: number;
    date: string;
    customerId: number;
    employeeId: number;
    requestType: 'cleaning' | 'tv maintenance' | 'bathroom maintenance'|'Laundry'|'Hire Driver' |'Bar & Drink'|'Catering Service' |'Babysitting'|'Travel Plan';
    requestStatus: 'pending' | 'progres' | 'done';
    employee?:Employee
    note?:string,
    customer?: Customer;
    room ?:RoomAppointment;
  }
  