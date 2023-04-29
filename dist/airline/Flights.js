"use strict";
exports.__esModule = true;
exports.Flights = void 0;
var Flights = /** @class */ (function () {
    function Flights(date_deporture, date_arrival, time_departure, time_arrival, flight_number, route, aeroplane) {
        this.passengers = [];
        this.tictkets = [];
        this.flight_attendant = [];
        this.pilots = [];
        this.chefs = [];
        this.managers = [];
        this.booking = [];
        this.date_deporture = date_deporture;
        this.date_arrival = date_arrival;
        this.time_departure = time_departure;
        this.time_arrival = time_arrival;
        this.flight_number = flight_number;
        this.route = route;
        this.aeroplane = aeroplane;
    }
    // Add all property that has relationship
    Flights.prototype.addPassenger = function (passenger) {
        this.passengers.push(passenger);
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
    Flights.prototype.addManager = function (manager) {
        this.managers.push(manager);
    };
    Flights.prototype.addBooking = function (booking) {
        this.booking.push(booking);
    };
    // Get salary all employee
    Flights.prototype.getSalaryPilot = function () {
        var salaryOfPilot = 0;
        for (var _i = 0, _a = this.pilots; _i < _a.length; _i++) {
            var pilot = _a[_i];
            salaryOfPilot += pilot["salary"];
        }
        return salaryOfPilot;
    };
    Flights.prototype.getSalaryChef = function () {
        var salaryOfChef = 0;
        for (var _i = 0, _a = this.chefs; _i < _a.length; _i++) {
            var chef = _a[_i];
            salaryOfChef += chef["salary"];
        }
        return salaryOfChef;
    };
    Flights.prototype.getSalaryFilghtAttendant = function () {
        var salaryOfFlightAttendant = 0;
        for (var _i = 0, _a = this.flight_attendant; _i < _a.length; _i++) {
            var listFilghtAttendant = _a[_i];
            salaryOfFlightAttendant += listFilghtAttendant["salary"];
        }
        return salaryOfFlightAttendant;
    };
    Flights.prototype.getSalaryManager = function () {
        return this.getSalaryPilot() + this.getSalaryChef() + this.getSalaryFilghtAttendant();
    };
    //Chef check meals from passenger
    Flights.prototype.getMeal = function () {
        var listMeal = [];
        for (var _i = 0, _a = this.passengers; _i < _a.length; _i++) {
            var passenger = _a[_i];
            for (var _b = 0, _c = passenger["meals"]; _b < _c.length; _b++) {
                var meal = _c[_b];
                listMeal.push(meal["name"]);
            }
            ;
            return listMeal;
        }
        // for(let listFlight of flight){
        //     for(let chef of this.chefs){
        //         for(let meal of chef["meals"]){
        //                 listMeal.push(meal["name"]);
        //             }
        //             return listMeal;
        //     }
        // }
    };
    Flights.prototype.getReturnTicket = function () {
        var listAllBooking = [];
        for (var _i = 0, _a = this.booking; _i < _a.length; _i++) {
            var listBooking = _a[_i];
            listAllBooking.push(listBooking);
        }
        return listAllBooking;
    };
    return Flights;
}());
exports.Flights = Flights;
;
