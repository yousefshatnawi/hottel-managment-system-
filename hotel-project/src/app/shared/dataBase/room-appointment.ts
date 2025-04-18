import { RoomAppointment } from "../../models/room-appointment.model";

export const roomAppointments: RoomAppointment[] = [
    {
        id: 1,
        date: '2023-10-27T10:00:00Z',
        customerId: 1,
        approvalStatus: 'approved',
        paymentStatus: true,
        paymentAmount: 250,
    },
    {
        id: 2,
        date: '2023-11-15T14:30:00Z',
        customerId: 2,
        approvalStatus: 'pending',
        paymentStatus: false,
        paymentAmount: 500,
    },
    {
        id: 3,
        date: '2023-12-01T09:00:00Z',
        customerId: 3,
        approvalStatus: 'rejected',
        paymentStatus: false,
        paymentAmount: 100,
    },
    {
        id: 4,
        date: '2023-11-20T18:00:00Z',
        customerId: 4,
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
        customerId: 6,
        approvalStatus: 'approved',
        paymentStatus: true,
        paymentAmount: 400,
    }
];
