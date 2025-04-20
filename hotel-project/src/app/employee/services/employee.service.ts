import { Injectable } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { employees as dummyEmployees, employees } from '../../database/employees';
import { EmployeeRequest } from '../../models/employee-request.model';
import { employeeRequests } from '../../database/employee-request';



const EMPLOYEES_KEY = 'EMPLOYEES_KEY';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor() { }

 
  getAllEmployees(): Employee[] {
    return employees;
  }

 
  getRequestsByEmployee(): any[] {
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    const allRequests: EmployeeRequest[] = JSON.parse(localStorage.getItem('employeeRequests') || '[]');
    const allCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
  
    const requests = allRequests.filter(req => req.employeeId === currentUser.id);
  
    // دمج كل طلب مع اسم الزبون الخاص فيه
    return requests.map(req => {
      const customer = allCustomers.find((c: any) => c.id === req.customerId);
      return {
        ...req,
        customerName: customer ? customer.name : 'Unknown'
      };
    });
  }
  


  getRequestsByEmployeeId(employeeId: number): EmployeeRequest[] {
    return employeeRequests.filter(req => req.employeeId === employeeId);
  }

  getRequestById(id: number): EmployeeRequest | undefined {
    return employeeRequests.find(request => request.id === id);
  }

updateRequestStatus(requestId: number, newStatus: 'done' | 'pending' | 'progress'): void {
  const request = employeeRequests.find(r => r.id === requestId);
  if (request) {
    request.requestStatus = newStatus;
    console.log('Request status updated:', request);
  }
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
  
  // تخزين البيانات في localStorage بعد إضافة الموظف
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