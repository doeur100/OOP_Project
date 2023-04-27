
import {Bag} from "./bag/Bag";
import {Passenger} from "./human/passenger/Passenger";
import { Gender } from "./human/Person";
import { Meal } from "./meal/Meal";
import {Chef} from "./human/staff/Chef";
import {Flight_attendant} from "./human/staff/Flight_attendant";
import {Aeroplane} from "./airline/Aeroplane";
import { Seat } from "./location/Seat";
import { Route } from "./Route";
import { Flights } from "./airline/Flights";
import { Pilot } from "./human/staff/Pilot";




let bag1 = new Bag("BA12");
let bag2 = new Bag("BA15");
let bag3 = new Bag("BA16");

let passenger1 = new Passenger("Sreypheap","Khin",18,Gender.FEMALE,bag1);
let passenger2 = new Passenger("Sreyka","Khun",18,Gender.FEMALE,bag2);
let passenger3 = new Passenger("Sreyphin","King",18,Gender.FEMALE,bag3);

let pilot1 = new Pilot(20000,"bory","jin",30,Gender.MALE);
let pilot2 = new Pilot(20000,"bory","jin",30,Gender.MALE);
let pilot3 = new Pilot(20000,"bory","jin",30,Gender.MALE);

let meal1 = new Meal("Noodle",12000);
let chef1 = new Chef(800,"Da","SA",25,Gender.FEMALE);
let flight_attendant1 = new Flight_attendant(500,"Sophorn","Hin",90,Gender.MALE);
let seat1  = new Seat ("12V", 100, passenger1);
let aeroplane1 = new Aeroplane("registration",seat1);
let route1 = new Route ("Phnom Penh", "Bangkok");

let flight1 = new Flights("1/04/2023", "2/4/2023","9:30am", "1:30pm","M0120",route1,aeroplane1);
flight1.addChef(chef1);
flight1.addFlightAttendant(flight_attendant1);
flight1.addPerson(passenger1);
flight1.addPilot(pilot1);
console.log(flight1);

