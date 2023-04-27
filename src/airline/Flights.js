"use strict";
exports.__esModule = true;
exports.Flights = void 0;
var Flights = /** @class */ (function () {
    function Flights(date_deporture, date_arrival, time_deporture, time_arrival, flight_number, route, aeroplane) {
        this.passengers = [];
        this.tictkets = [];
        this.flight_attendant = [];
        this.pilots = [];
        this.chefs = [];
        this.date_deporture = date_deporture;
        this.date_arrival = date_arrival;
        this.time_deporture = time_deporture;
        this.time_arrival = time_arrival;
        this.flight_number = flight_number;
        this.route = route;
        this.aeroplane = aeroplane;
    }
    Flights.prototype.addPerson = function (passengers) {
        this.passengers.push(passengers);
    };
    Flights.prototype.addTicket = function (tictkets) {
        this.tictkets.push(tictkets);
    };
    Flights.prototype.addFlightAttendant = function (flight_attendant) {
        this.flight_attendant.push(flight_attendant);
    };
    Flights.prototype.addPilot = function (pilot) {
        this.pilots.push(pilot);
    };
    Flights.prototype.addChef = function (chef) {
        this.chefs.push(chef);
    };
    return Flights;
}());
exports.Flights = Flights;
;
