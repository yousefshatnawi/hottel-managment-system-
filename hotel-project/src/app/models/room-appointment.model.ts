import { Customer } from "./customer.model";
import { Employee } from "./employee.model";
import { Room } from "./room.model";

export interface RoomAppointment {
    id: number;
    date: string;
    customerId: number;
    customer? :Customer;
    roomType?: 'room' | 'hall';
    approvalStatus: 'pending' | 'approved' | 'rejected';
    paymentStatus: boolean;
    paymentAmount: number;
    roomName? :string;
    employees ?:Employee;
    room?:Room;
  }