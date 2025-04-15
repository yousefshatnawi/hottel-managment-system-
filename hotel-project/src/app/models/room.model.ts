export interface Room {
    id: number;
    title: string;
    roomType: 'room' | 'hall';
    floor: string;
    building: string;
    details: string;
    bookedStatus: boolean;
  }