// import { Room } from "../../models/room.model";

import { Room } from "../../models/room.model";

export const Rooms: Room[] = [
    {
        id: 101,
        title: 'Standard Double Room 101',
        roomType: 'room',
        floor: '1st',
        building: 'Main Building',
        details: 'Double bed, city view, non-smoking.',
        bookedStatus: false,
        booked: undefined,
        paymentAmount: 90,

    },
    {
        id: 201,
        title: 'Conference Hall A',
        roomType: 'hall',
        floor: '2nd',
        building: 'Annex Building',
        details: 'Seats 100, projector, sound system.',
        bookedStatus: true,
        booked: undefined,
        paymentAmount: 90,

    },
    {
        id: 302,
        title: 'Executive Suite 302',
        roomType: 'room',
        floor: '3rd',
        building: 'Main Building',
        details: 'King bed, living room, balcony, ocean view.',
        bookedStatus: false,
        booked: undefined,
        paymentAmount: 90,

    },
    {
        id: 102,
        title: 'Twin Room 102',
        roomType: 'room',
        floor: '1st',
        building: 'Main Building',
        details: 'Two single beds, garden view, non-smoking.',
        bookedStatus: true,
        booked: undefined,
        paymentAmount: 90,

    },
    {
        id: 10,
        title: 'Banquet Hall B',
        roomType: 'hall',
        floor: 'Ground',
        building: 'Annex Building',
        details: 'Seats 200, stage, dance floor, bar.',
        bookedStatus: false,
        booked: undefined,
        paymentAmount: 90,

    },
    {
        id: 205,
        title: 'Deluxe Single Room 205',
        roomType: 'room',
        floor: '2nd',
        building: 'Main Building',
        details: 'Single bed, city view, mini-fridge.',
        bookedStatus: false,
        booked: undefined,
        paymentAmount: 90,

    },
    {
        id: 20,
        title: 'Meeting Room C',
        roomType: 'hall',
        floor: 'Ground',
        building: 'Annex Building',
        details: 'Seats 20, whiteboard, conference phone.',
        bookedStatus: true,
        booked: undefined,
        paymentAmount: 90,

    },
    {
        id: 103,
        title: "Quadruple Room 103",
        roomType: "room",
        floor: "1st",
        building: "Main Building",
        details: "Two double beds, city view, family friendly",
        bookedStatus: false,
        booked: undefined,
        paymentAmount: 90,

    }

];