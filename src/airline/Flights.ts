import { Route } from "../Route";
import { Aeroplane } from "./Aeroplane";

export class Flights {
    private date: string;
    private time: string;
    private flight_number: string;
    private route:Route;
    private aeroplane:Aeroplane;
    constructor(date: string, time: string, flight_number: string,route:Route,aeroplane:Aeroplane){
        this.date = date;
        this.time = time;
        this.flight_number = flight_number;
        this.route = route;
        this.aeroplane = aeroplane;
    }
};