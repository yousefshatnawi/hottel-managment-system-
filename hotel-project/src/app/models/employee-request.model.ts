export interface EmployeeRequest {
    id: number;
    date: string;
    customerId: number;
    employeeId: number;
    requestType: 'cleaning' | 'tv maintenance' | 'bathroom maintenance';
    requestStatus: 'pending' | 'progress' | 'done';
  }
  