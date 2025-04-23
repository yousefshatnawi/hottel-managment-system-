import { EmployeeRequest } from "../../models/employee-request.model";

export let employeeRequests: EmployeeRequest[] = [
  { id: 202504001, date: '2024-01-01T09:00:00Z', customerId: 1, employeeId: 1, requestType: 'cleaning', requestStatus: 'done' },
  { id: 202504002, date: '2024-01-02T10:00:00Z', customerId: 1, employeeId: 2, requestType: 'tv maintenance', requestStatus: 'progress' },
  { id: 202504003, date: '2024-01-02T10:00:00Z', customerId: 1, employeeId: 3, requestType: 'bathroom maintenance', requestStatus: 'pending' },
  { id: 202504004, date: '2024-01-04T12:00:00Z', customerId: 2, employeeId: 1, requestType: 'tv maintenance', requestStatus: 'done' },
  { id: 202504005, date: '2024-01-05T13:00:00Z', customerId: 2, employeeId: 4, requestType: 'bathroom maintenance', requestStatus: 'progress' },
  { id: 202504006, date: '2024-01-06T14:00:00Z', customerId: 2, employeeId: 5, requestType: 'cleaning', requestStatus: 'pending' },
  { id: 202504007, date: '2024-01-07T15:00:00Z', customerId: 3, employeeId: 2, requestType: 'bathroom maintenance', requestStatus: 'done' },
  { id: 202504008, date: '2024-01-08T16:00:00Z', customerId: 3, employeeId: 3, requestType: 'tv maintenance', requestStatus: 'progress' },
  { id: 202504009, date: '2024-01-09T17:00:00Z', customerId: 3, employeeId: 4, requestType: 'cleaning', requestStatus: 'pending' },
  { id: 202504010, date: '2024-01-10T18:00:00Z', customerId: 4, employeeId: 1, requestType: 'cleaning', requestStatus: 'done' },
  { id: 202504011, date: '2024-01-11T09:00:00Z', customerId: 4, employeeId: 3, requestType: 'tv maintenance', requestStatus: 'progress' },
  { id: 202504012, date: '2024-01-12T10:00:00Z', customerId: 4, employeeId: 5, requestType: 'bathroom maintenance', requestStatus: 'pending' },
  { id: 202504013, date: '2024-01-13T11:00:00Z', customerId: 5, employeeId: 2, requestType: 'tv maintenance', requestStatus: 'done' },
  { id: 202504014, date: '2024-01-14T12:00:00Z', customerId: 5, employeeId: 4, requestType: 'bathroom maintenance', requestStatus: 'progress' },
  { id: 202504015, date: '2024-01-15T13:00:00Z', customerId: 5, employeeId: 5, requestType: 'cleaning', requestStatus: 'pending' },
  { id: 202504016, date: '2024-01-13T11:00:00Z', customerId: 6, employeeId: 2, requestType: 'tv maintenance', requestStatus: 'done' },
  { id: 202504017, date: '2024-01-14T12:00:00Z', customerId: 6, employeeId: 4, requestType: 'bathroom maintenance', requestStatus: 'progress' },
  { id: 202504018, date: '2024-01-15T13:00:00Z', customerId: 6, employeeId: 5, requestType: 'cleaning', requestStatus: 'pending' }
];