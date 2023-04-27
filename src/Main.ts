
import { Bag } from "./bag/Bag";
import { Passenger } from "./human/passenger/Passenger";
import { Gender } from "./human/Person";
import { Meal } from "./meal/Meal";
import { Chef} from "./human/staff/Chef";
import { Flight_attendant } from "./human/staff/Flight_attendant";
import { Aeroplane } from "./airline/Aeroplane";
import { Seat } from "./location/Seat";
import { Route } from "./Route";
import { Flights } from "./airline/Flights";
import { Pilot } from "./human/staff/Pilot";

let bag1 = new Bag("BA12");
let bag2 = new Bag("BA15");
let bag3 = new Bag("BA16");

let passenger1 = new Passenger("Sreypheap","Khin",18,Gender.FEMALE,bag1);
let passenger2 = new Passenger("Sreyka","Khun",20,Gender.FEMALE,bag2);
let passenger3 = new Passenger("Sreyphin","King",20,Gender.FEMALE,bag3);

let pilot1 = new Pilot(15000,"bory","jin",30,Gender.MALE);
let pilot2 = new Pilot(15000,"chetra","van",35,Gender.MALE);
let pilot3 = new Pilot(15000,"vibol","kim",25,Gender.MALE);

let meal1 = new Meal("Noodle",12000);
let meal2 = new Meal("Pizza",15000);
let meal3 = new Meal("Shop",10000);

let chef1 = new Chef(800,"Da","SA",25,Gender.FEMALE);
let chef2 = new Chef(800,"De","SAN",25,Gender.FEMALE);
let chef3 = new Chef(800,"Den","SIN",25,Gender.FEMALE);

let flight_attendant1 = new Flight_attendant(500,"Sophorn","Hin",90,Gender.MALE);
let flight_attendant2 = new Flight_attendant(500,"Ah","Yubin",90,Gender.MALE);
let flight_attendant3 = new Flight_attendant(500,"Sopana","Pi",90,Gender.MALE);

let seat1  = new Seat ("12V", 100, passenger1);
let seat2  = new Seat ("25V", 100, passenger2);
let seat3  = new Seat ("30V", 100, passenger3);

let aeroplane1 = new Aeroplane("OH-LWP",seat1);
let aeroplane2 = new Aeroplane("ZB1-HD",seat2);
let aeroplane3 = new Aeroplane("WIN-WIN",seat3);

let route1 = new Route ("Phnom Penh", "Bangkok");
let route2 = new Route ("Bangkok", "Singapore");
let route3 = new Route ("Singapore", "UK");

let flight1 = new Flights("1/04/2023", "2/4/2023","9:30am", "1:30pm","M0120",route1,aeroplane1);
let flight2 = new Flights("13/04/2023", "13/4/2023","9:30am", "1:30pm","M0120",route2,aeroplane2);
let flight3 = new Flights("10/04/2023", "11/4/2023","9:30am", "1:30pm","M0120",route3,aeroplane3);

flight1.addChef(chef1);
flight1.addFlightAttendant(flight_attendant1);
flight1.addPerson(passenger1);
flight1.addPilot(pilot1);
console.log(flight1);