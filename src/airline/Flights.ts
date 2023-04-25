export class Flights {
    private date: string;
    private time: string;
    private flight_number: string;
    constructor(date: string, time: string, flight_number: string){
        this.date = date;
        this.time = time;
        this.flight_number = flight_number;
    }
};