// import { Room } from "../../models/room.model";

import { Room } from "../../models/room.model";

export const Rooms: Room[] = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
            id: 4,
            title: 'Twin Room 102',
            roomType: 'room',
            floor: '1st',
            building: 'Main Building',
            details: 'Two single beds, garden view, non-smoking.',
            bookedStatus: true,
            booked: undefined
        ,        paymentAmount: 90,

        },
    {
        id: 5,
        title: 'Banquet Hall B',
        roomType: 'hall',
        floor: 'Ground',
        building: 'Annex Building',
        details: 'Seats 200, stage, dance floor, bar.',
        bookedStatus: false,
        booked: undefined
        ,        paymentAmount: 90,

    },
    {
        id: 6,
        title: 'Deluxe Single Room 205',
        roomType: 'room',
        floor: '2nd',
        building: 'Main Building',
        details: 'Single bed, city view, mini-fridge.',
        bookedStatus: false,
        booked: undefined
        ,        paymentAmount: 90,

    },
    {
        id: 7,
        title: 'Meeting Room C',
        roomType: 'hall',
        floor: '3rd',
        building: 'Annex Building',
        details: 'Seats 20, whiteboard, conference phone.',
        bookedStatus: true,
        booked: undefined
        ,        paymentAmount: 90,

    },
    {
        id: 8,
        title: "Quadruple Room 103",
        roomType: "room",
        floor: "1st",
        building: "Main Building",
        details: "Two double beds, city view, family friendly",
        bookedStatus: false,
        booked: undefined
        ,        paymentAmount: 90,

    }

];