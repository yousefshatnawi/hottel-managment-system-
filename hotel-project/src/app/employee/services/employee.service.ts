import { Injectable } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeRequest } from '../../models/employee-request.model';
import { Customer } from '../../models/customer.model';
import { customers } from '../../shared/dataBase/customer';
import { employees } from '../../shared/dataBase/employee';
import { employeeRequests } from '../../shared/dataBase/employee-request';



const EMPLOYEES_KEY = 'EMPLOYEES_KEY';

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
    const currentUser = JSON.parse(localStorage.getItem('employee') || '{}');// loggedInUser ->user
    // const allRequests: EmployeeRequest[] = JSON.parse(localStorage.getItem('employeeRequests') || '[]');
    const allRequests: EmployeeRequest[] = employeeRequests;
    //localStorage  ->database
    // const allCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
    const requests = allRequests.filter(req => req.employeeId === currentUser.id);
    return requests;
    // const allCustomers :Customer[]= customers;
    // //customers ->customer  
  
    
    // return requests.map(req => {
    //   const customer = allCustomers.find((c: any) => c.id === req.customerId);
    //   return {
    //     ...req,
    //     customerName: customer ? customer.name : 'Unknown'
    //   };
    // });
  }
  


  getRequestsByEmployeeId(employeeId: number): EmployeeRequest[] {
    return employeeRequests.filter(req => req.employeeId === employeeId);
  }
 
  getRequestById(id: number): EmployeeRequest | undefined {
    return this.requests.find(request => request.id === id);
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
  
  // updateRequestStatus(
  //   requestId: number,
  //   newStatus: 'pending' | 'progress' | 'done',
  //   employeeId: number
  // ) {
  //   const index = this.requests.findIndex((r: EmployeeRequest) => r.id === requestId);
    
  //   if (index !== -1) {
  //     this.requests[index].requestStatus = newStatus;
  
  //     // نجيب كل الطلبات الخاصة بالموظف
  //     const currentRequests = this.requests.filter(r => r.employeeId === employeeId);
  
  //     // نحدث الـ localStorage مع الكل
  //     localStorage.setItem('employeeRequest', JSON.stringify([...currentRequests]));
  
  //     console.log('Updated request:', this.requests[index]);
  //     return true;
  //   } else {
  //     console.error('Request not found:', requestId);
  //     return false;
  //   }
  // }
  

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

      
        localStorage.setItem('employee', JSON.stringify(employees[employeeIndex]));
        
        resolve(employees[employeeIndex]);
      } else {
        reject('Employee not found');
      }
    }, 1500);
  });
}

}