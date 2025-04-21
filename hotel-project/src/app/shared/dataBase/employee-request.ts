import { EmployeeRequest } from "../../models/employee-request.model";

export let employeeRequests: EmployeeRequest[] = [
  { id: 1, date: '2024-01-01T09:00:00Z', customerId: 1, employeeId: 1, requestType: 'cleaning', requestStatus: 'done' },
  { id: 2, date: '2024-01-02T10:00:00Z', customerId: 1, employeeId: 2, requestType: 'tv maintenance', requestStatus: 'progress' },
  { id: 3, date: '2000-1-1', customerId: 1, employeeId: 3, requestType: 'bathroom maintenance', requestStatus: 'pending' },
  { id: 4, date: '2024-01-04T12:00:00Z', customerId: 2, employeeId: 1, requestType: 'tv maintenance', requestStatus: 'done' },
  { id: 5, date: '2024-01-05T13:00:00Z', customerId: 2, employeeId: 4, requestType: 'bathroom maintenance', requestStatus: 'progress' },
  { id: 6, date: '2024-01-06T14:00:00Z', customerId: 2, employeeId: 5, requestType: 'cleaning', requestStatus: 'pending' },
  { id: 7, date: '2024-01-07T15:00:00Z', customerId: 3, employeeId: 2, requestType: 'bathroom maintenance', requestStatus: 'done' },
  { id: 8, date: '2024-01-08T16:00:00Z', customerId: 3, employeeId: 3, requestType: 'tv maintenance', requestStatus: 'progress' },
  { id: 9, date: '2024-01-09T17:00:00Z', customerId: 3, employeeId: 4, requestType: 'cleaning', requestStatus: 'pending' },
  { id: 10, date: '2024-01-10T18:00:00Z', customerId: 4, employeeId: 1, requestType: 'cleaning', requestStatus: 'done' },
  { id: 11, date: '2024-01-11T09:00:00Z', customerId: 4, employeeId: 3, requestType: 'tv maintenance', requestStatus: 'progress' },
  { id: 12, date: '2024-01-12T10:00:00Z', customerId: 4, employeeId: 5, requestType: 'bathroom maintenance', requestStatus: 'pending' },
  { id: 13, date: '2024-01-13T11:00:00Z', customerId: 5, employeeId: 2, requestType: 'tv maintenance', requestStatus: 'done' },
  { id: 14, date: '2024-01-14T12:00:00Z', customerId: 5, employeeId: 4, requestType: 'bathroom maintenance', requestStatus: 'progress' },
  { id: 15, date: '2024-01-15T13:00:00Z', customerId: 5, employeeId: 5, requestType: 'cleaning', requestStatus: 'pending' },
  { id: 16, date: '2024-01-13T11:00:00Z', customerId: 6, employeeId: 2, requestType: 'tv maintenance', requestStatus: 'done' },
  { id: 17, date: '2024-01-14T12:00:00Z', customerId: 6, employeeId: 4, requestType: 'bathroom maintenance', requestStatus: 'progress' },
  { id: 18, date: '2024-01-15T13:00:00Z', customerId: 6, employeeId: 5, requestType: 'cleaning', requestStatus: 'pending' }
];