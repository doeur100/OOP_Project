import { Seat } from "../location/Seat";

export class Aeroplane {
    private registration: string;
    protected seats: Seat[] = [];
    constructor(
        registration: string){
            this.registration = registration;
    }
    //Add seats to Aeropoane
    addSeat(seat:Seat){
        this.seats.push(seat);
    }
};