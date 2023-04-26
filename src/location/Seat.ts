export enum TypeOfSeat{
    BUSSINESS,
    ECONOMY,
}
export class Seat {
    private seat_number: string;
    private price: number;
    constructor(seat_number: string, price: number){
        this.seat_number = seat_number;
        this.price = price;
    }
};