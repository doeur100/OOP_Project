import { Passenger } from "../human/passenger/Passenger";

export enum TypeOfSeat{
    BUSSINESS,
    ECONOMY,
}
export class Seat {
    private seat_number: string;
    private price: number;

    private typeof_seat: TypeOfSeat;
    passenger: Passenger;
    constructor(
        seat_number: string, 
        price: number, 
        passenger: Passenger){
            this.seat_number = seat_number;
            this.price = price;
            this.passenger = passenger;
    }
};