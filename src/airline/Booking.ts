import { Flights} from "./Flights";

export enum TypeOfBooking {
    RETURN,
    UNRETURN,
};
export class Booking {
    private referenceNumber:string;
    public flight:Flights;
    public typeOfBooking:TypeOfBooking;
    constructor(
        flight:Flights,
        referenceNumber:string,
        typeOfBooking:TypeOfBooking){
            this.flight = flight;
            this.referenceNumber = referenceNumber;
            this.typeOfBooking = typeOfBooking;
    }
    //get full information
    getInformationPassenger(referenceNumber:string){
        if(referenceNumber === this.referenceNumber) {
            return this.flight;
        }
    };
};