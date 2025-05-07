import { Injectable } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeRequest } from '../../models/employee-request.model';
import { customers } from '../../shared/dataBase/customer';
import { employees } from '../../shared/dataBase/employee';
import { employeeRequests } from '../../shared/dataBase/employee-request';
import { roomAppointments } from '../../shared/dataBase/room-appointment';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private requests: EmployeeRequest[] = [...employeeRequests];
  constructor() { }

 
  getAllEmployees(): Employee[] {
    return employees;
  }

  
  getRequestsByEmployee(): EmployeeRequest[] {
    this.requests = [...employeeRequests];
    const currentUser = JSON.parse(localStorage.getItem('employee') || '{}');
    const allRequests: EmployeeRequest[] = employeeRequests;
 
    const requests = allRequests.filter(req => req.employeeId === currentUser.id);
    return requests;

  }
  


  getRequestsByEmployeeId(employeeId: number): EmployeeRequest[] {
    this.requests = [...employeeRequests]; 
    return employeeRequests.filter(req => req.employeeId === employeeId);
  }
 
  getRequestById(id: number): EmployeeRequest | undefined {
    const emp = this.requests.find(request => request.id === id);
    if (!emp) return undefined;
  
    return {
      ...emp,
      customer: customers.find(customer => customer.id === emp.customerId),
      employee: employees.find(employee => employee.id === emp.employeeId),
      room: roomAppointments.find(room => room.customerId === emp.customerId)
    };
  }
  
  updateRequestStatus(
    requestId: number,
    newStatus: 'pending' | 'progres' | 'done',
    employeeId: number
  ) {
    const index = this.requests.findIndex((r: EmployeeRequest) => r.id === requestId);
    
    if (index !== -1) {
      this.requests[index].requestStatus = newStatus;
  
      const updatedRequest = { ...this.requests[index] };
      localStorage.setItem('updatedRequest', JSON.stringify(updatedRequest));
  
      console.log('Updated request:', this.requests[index]);
      return true;
    } else {
      console.error('Request not found:', requestId);
      return false;
    }
  }


  getAllRequests(): EmployeeRequest[] {
    return this.requests;
  }

addRequest(request: EmployeeRequest) {
  const newId = employeeRequests.length > 0 ? Math.max(...employeeRequests.map(r => r.id)) + 1 : 1;

  
  const newRequest: EmployeeRequest = {
    ...request,
    id: newId,
    requestStatus: 'pending',  
  };

  employeeRequests.push(newRequest);
  
  console.log('Request added:', newRequest);
}


addEmployee(employee: Employee) {
  const newId = employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 1;
  const newEmployee = {
    ...employee,
    id: newId
  };
  employees.push(newEmployee);
  

  localStorage.setItem('employee', JSON.stringify(newEmployee));
  console.log('Employee added:', newEmployee);
}



updateEmployee(employeeUpdate: Employee): Promise<Employee> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const employeeIndex = employees.findIndex(emp => emp.id === employeeUpdate.id);

      if (employeeIndex !== -1) {
        employees[employeeIndex] = { ...employeeUpdate };

        localStorage.setItem('EMPLOYEES_KEY', JSON.stringify(employees));

        localStorage.setItem('employee', JSON.stringify(employees[employeeIndex]));
        
        resolve(employees[employeeIndex]);
      } else {
        reject('Employee not found');
      }
    }, 1500);
  });
}

}