import { Customer } from "./customer.model";
import { Employee } from "./employee.model";

export interface EmployeeRequest {
    id: number;
    date: string;
    customerId: number;
    employeeId: number;
    requestType: 'cleaning' | 'tv maintenance' | 'bathroom maintenance';
    requestStatus: 'pending' | 'progres' | 'done';
    employee?:Employee
    customer?: Customer;
  }
  