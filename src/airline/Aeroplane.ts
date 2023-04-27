import { Seat } from "../location/Seat";

export class Aeroplane {
    private registration: string;

    protected seats: Seat;
    constructor(
        registration: string, 
        seats: Seat){
            this.registration = registration;
            this.seats = seats;
    }
};