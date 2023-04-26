import { Flights } from "./Flights";

export class Airline {
    private nameAirline: string;
    public flights:Flights[] = [];
    constructor (nameAirline: string){
        this.nameAirline = nameAirline;
    }
    addFlight(flight:Flights){
        this.flights.push(flight);
    }
};