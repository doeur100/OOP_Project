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
import { Manager } from "./human/Manager";
import { Booking, TypeOfBooking } from "./airline/Booking";
import { Airline } from "./airline/Airline";
import { Gate } from "./location/Gate";

//Create object airline
let airline = new Airline("PND Intertainment");

//Create object Bags
let bag1 = new Bag("A12");
let bag2 = new Bag("B15");
let bag3 = new Bag("C16");
let bag4 = new Bag("D20");
let bag5 = new Bag("E60");
let bag6 = new Bag("F26");
 
//Create object Gates
let gate1 = new Gate("10M");
let gate2 = new Gate("20T");

//Create object Passengers
let passenger1 = new Passenger("Sreypheap","Khin",18,Gender.FEMALE,bag1,gate1);
let passenger2 = new Passenger("Linna","Muth",20,Gender.FEMALE,bag2,gate1);
let passenger3 = new Passenger("Phin","Lenk",20,Gender.FEMALE,bag3,gate1);
let passenger4 = new Passenger("Soriya","hor",18,Gender.FEMALE,bag4,gate2);
let passenger5 = new Passenger("Hen","Dyna",20,Gender.FEMALE,bag5,gate2);
let passenger6 = new Passenger("Seyla","leb",20,Gender.MALE,bag6,gate2);

//Create object Pilots
let pilot1 = new Pilot(15000,"bora","bi",30,Gender.MALE);
let pilot2 = new Pilot(15000,"chetra","van",35,Gender.MALE);

//Create object Meals
let meal1 = new Meal("Noodle",12000);
let meal2 = new Meal("Pizza",15000);
let meal3 = new Meal("pasta",20000);

//Create object Chefs
let chef1 = new Chef(800,"Thida","Kan",25,Gender.FEMALE);
let chef2 = new Chef(800,"Un","Yubin",25,Gender.FEMALE);

//Create object flisht_attendants
let flight_attendant1 = new Flight_attendant(500,"Sopheaktra","Jin",30,Gender.MALE);
let flight_attendant2 = new Flight_attendant(500,"Sreyka","Min",25,Gender.FEMALE);

//Create object seats
let seat1  = new Seat ("12S", 100, passenger1);
let seat2  = new Seat ("25S", 100, passenger2);
let seat3  = new Seat ("30S", 100, passenger3);
let seat4  = new Seat ("35V", 100, passenger4);
let seat5  = new Seat ("32V", 100, passenger5);
let seat6  = new Seat ("100V", 100, passenger6);

//Creae object aeroplanes
let aeroplane1 = new Aeroplane("OH-LWP");
let aeroplane2 = new Aeroplane("ZB1-HD");

//Create object Routes
let route1 = new Route ("Phnom Penh", "Bangkok");
let route2 = new Route ("Bangkok", "Singapore");

//Create object Managers
let manager1 = new Manager(1000,"Sokunthea","Neang",30,Gender.FEMALE); 
let manager2 = new Manager(1000,"Ahnisa","Sin",29,Gender.FEMALE);

//Create object flights
let flight1 = new Flights("01/05/2023", "02/05/2023","11:30am", "5:30pm","M0120",route1,aeroplane1);
let flight2 = new Flights("03/05/2023", "04/05/2023","11:00am", "4:30pm","M0121",route2,aeroplane2);

//Create object booking
let booking1 = new Booking(flight1,"PAD00120",TypeOfBooking.UNRETURN);
let booking2 = new Booking(flight2,"PAD00121",TypeOfBooking.UNRETURN);

//Add meals to passenger
passenger1.addMeal(meal1);
passenger1.addMeal(meal2);
passenger1.addMeal(meal3);

//Add meals to chef
chef1.addMeal(meal1);
chef1.addMeal(meal2);
chef1.addMeal(meal3)

//Add seats to aeroplane
aeroplane1.addSeat(seat1);
aeroplane1.addSeat(seat2);
aeroplane1.addSeat(seat3);
aeroplane2.addSeat(seat4);
aeroplane2.addSeat(seat5);
aeroplane2.addSeat(seat6);

//Add booking to flights
flight1.addBooking(booking1);
flight1.addBooking(booking2);

//Add gates to airline
airline.addGate(gate1);
airline.addGate(gate2)
airline.addFlight(flight1);
airline.addFlight(flight2);

//Add employee to flight1
flight1.addChef(chef1);
flight1.addFlightAttendant(flight_attendant1);
flight1.addPilot(pilot1);
flight1.addPilot(pilot2);
flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);
flight1.addPassenger(passenger3)
flight1.addManager(manager1);

//Add employee to flight2
flight2.addChef(chef2);
flight2.addFlightAttendant(flight_attendant2);
flight2.addPilot(pilot2);
flight2.addPassenger(passenger4);
flight2.addPassenger(passenger5);
flight2.addPassenger(passenger6)
flight2.addManager(manager2);

// console.log(booking1.getInformationPassenger("PAD00120"));
// console.log("Total salary that manager respon to employee is " + flight1.getSalaryManager());
// console.log(flight1.getMeal());
// console.log(airline.getGate("M0121"));
// console.log(airline.getFlights("01/05/2023"));
// console.log(airline.getPassenger());
console.log(flight1.getReturnOfPassenger());