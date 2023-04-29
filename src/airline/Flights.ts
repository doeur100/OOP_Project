import { Route } from "../Route";
import { Manager } from "../human/Manager";
import { Passenger } from "../human/passenger/Passenger";
import { Chef } from "../human/staff/Chef";
import { Flight_attendant } from "../human/staff/Flight_attendant";
import { Pilot } from "../human/staff/Pilot";
import { Aeroplane } from "./Aeroplane";
import { Booking, TypeOfBooking } from "./Booking";
export class Flights {
    private date_departure: string;
    private date_arrival: string;
    private time_departure: string;
    private time_arrival: string;
    private flight_number: string;

    public route:Route;
    public aeroplane:Aeroplane;
    public passengers: Passenger[] = [];
    public flight_attendant: Flight_attendant[] = [];
    public pilots: Pilot[] = [];
    public chefs: Chef[] = [];
    public managers:Manager[] = [];
    public booking: Booking[] = [];
    constructor(
        date_deporture: string, 
        date_arrival: string, 
        time_departure: string, 
        time_arrival: string, 
        flight_number: string,
        route:Route,
        aeroplane:Aeroplane){
            this.date_departure = date_deporture;
            this.date_arrival = date_arrival;
            this.time_departure = time_departure;
            this.time_arrival = time_arrival;
            this.flight_number = flight_number;
            this.route = route;
            this.aeroplane = aeroplane;
    }
    addPassenger(passenger: Passenger){
        this.passengers.push(passenger);
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
    addManager(manager:Manager){
        this.managers.push(manager)
    }
    addBooking(booking:Booking){
        this.booking.push(booking);
    }
    // Get salary all employee
    getSalaryPilot(): number{
        let salaryOfPilot = 0;
        for(let pilot of this.pilots) {
           salaryOfPilot += pilot["salary"];
        }
        return salaryOfPilot;
    }
    getSalaryChef():number {
        let salaryOfChef = 0;
        for(let chef of this.chefs) {
             salaryOfChef += chef["salary"];
            }
            return salaryOfChef;
    }
    getSalaryFilghtAttendant():number {
        let salaryOfFlightAttendant = 0;
        for(let listFilghtAttendant of this.flight_attendant) {
            salaryOfFlightAttendant += listFilghtAttendant["salary"];
        }
        return  salaryOfFlightAttendant;
    }
    getSalaryManager():number {
        return  this.getSalaryPilot() + this.getSalaryChef() + this.getSalaryFilghtAttendant();
    }
    //Chef check meals from passenger
    getMeal() {
       let  listMeal = [];
        for(let passenger of this.passengers){
          for(let meal of passenger["meals"]){
              listMeal.push(meal["name"]);
            };
            return listMeal;
        }
    }
    //get Passenger comeback
    getReturnOfPassenger(){
        let passengerReturn = 0;
        for(let listBooking of this.booking) {
            if(listBooking["typeOfBooking"] === TypeOfBooking.RETURN) {
                passengerReturn += 1
            } ;
        }
        return passengerReturn;
    }
};