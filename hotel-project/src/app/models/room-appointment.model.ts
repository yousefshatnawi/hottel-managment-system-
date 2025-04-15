export interface RoomAppointment {
    id: number;
    date: string;
    customerId: number;
    approvalStatus: 'pending' | 'approved' | 'rejected';
    paymentStatus: boolean;
    paymentAmount: number;
  }