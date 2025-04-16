import { RoomAppointment } from "../../models/room-appointment.model";

export const roomAppointments: RoomAppointment[] = [
    {
        id: 1,
        date: '2023-10-27T10:00:00Z',
        customerId: 101,
        approvalStatus: 'approved',
        paymentStatus: true,
        paymentAmount: 250,
    },
    {
        id: 2,
        date: '2023-11-15T14:30:00Z',
        customerId: 102,
        approvalStatus: 'pending',
        paymentStatus: false,
        paymentAmount: 500,
    },
    {
        id: 3,
        date: '2023-12-01T09:00:00Z',
        customerId: 103,
        approvalStatus: 'rejected',
        paymentStatus: false,
        paymentAmount: 100,
    },
    {
        id: 4,
        date: '2023-11-20T18:00:00Z',
        customerId: 104,
        approvalStatus: 'approved',
        paymentStatus: true,
        paymentAmount: 300,
    },
    {
        id: 5,
        date: '2023-12-25T12:00:00Z',
        customerId: 105,
        approvalStatus: 'pending',
        paymentStatus: false,
        paymentAmount: 750,
    },
    {
        id: 6,
        date: '2024-01-10T16:00:00Z',
        customerId: 106,
        approvalStatus: 'approved',
        paymentStatus: true,
        paymentAmount: 400,
    }
];
