export interface RoomAppointment {
    id: number;
    date: string;
    customerId: number;
    roomType?: 'room' | 'hall';
    approvalStatus: 'pending' | 'approved' | 'rejected';
    paymentStatus: boolean;
    paymentAmount: number;
    roomName? :string
  }