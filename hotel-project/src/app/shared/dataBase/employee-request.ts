import { EmployeeRequest } from "../../models/employee-request.model";

export const employeeRequests: EmployeeRequest[] = [
    {
        id: 1,
        date: '2023-10-27T10:00:00Z',
        customerId: 101,
        employeeId: 1,
        requestType: 'cleaning',
        requestStatus: 'done',
    },
    {
        id: 2,
        date: '2023-11-15T14:30:00Z',
        customerId: 102,
        employeeId: 2,
        requestType: 'tv maintenance',
        requestStatus: 'progress',
    },
    {
        id: 3,
        date: '2023-12-01T09:00:00Z',
        customerId: 103,
        employeeId: 3,
        requestType: 'bathroom maintenance',
        requestStatus: 'pending',
    },
    {
        id: 4,
        date: '2023-11-20T18:00:00Z',
        customerId: 104,
        employeeId: 1,
        requestType: 'cleaning',
        requestStatus: 'progress',
    },
    {
        id: 5,
        date: '2023-12-25T12:00:00Z',
        customerId: 105,
        employeeId: 2,
        requestType: 'tv maintenance',
        requestStatus: 'done',
    },
    {
        id: 6,
        date: '2024-01-10T16:00:00Z',
        customerId: 106,
        employeeId: 3,
        requestType: 'bathroom maintenance',
        requestStatus: 'done',
    },
    {
        id: 7,
        date: '2024-01-15T10:00:00Z',
        customerId: 101,
        employeeId: 1,
        requestType: 'tv maintenance',
        requestStatus: 'pending',
    }
];