import { Route } from "../Route";
import { Passenger } from "../human/passenger/Passenger";
import { Chef } from "../human/staff/Chef";
import { Flight_attendant } from "../human/staff/Flight_attendant";
import { Pilot } from "../human/staff/Pilot";
import { Aeroplane } from "./Aeroplane";
import { Ticket } from "./Ticket";

export class Flights {
    private date: string;
    private time: string;
    private flight_number: string;

    public route:Route;
    public aeroplane:Aeroplane;
    public passengers: Passenger[] = [];
    private tictkets: Ticket[] = [];
    public flight_attendant: Flight_attendant[] = [];
    public pilots: Pilot[] = [];
    public chefs: Chef[] = [];
    constructor(date: string, time: string, flight_number: string,route:Route,aeroplane:Aeroplane){
        this.date = date;
        this.time = time;
        this.flight_number = flight_number;
        this.route = route;
        this.aeroplane = aeroplane;
    }
    addPerson(passengers: Passenger){
        this.passengers.push(passengers);
    }
    addTicket(tictkets: Ticket){
        this.tictkets.push(tictkets);
    }
    addFlightAttendant(flight_attendant: Flight_attendant){
        this.flight_attendant.push(flight_attendant);
    }
    addPilot(pilot: Pilot){
        this.pilots.push(pilot);
    }
    addChef(chef: Chef){
        this.chefs.push(chef);
    }
};