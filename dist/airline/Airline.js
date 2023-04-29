"use strict";
exports.__esModule = true;
exports.Airline = void 0;
var Airline = /** @class */ (function () {
    function Airline(airline_name) {
        this.flights = [];
        this.gates = [];
        this.manager = [];
        this.airline_name = airline_name;
    }
    Airline.prototype.addFlight = function (flight) {
        this.flights.push(flight);
    };
    Airline.prototype.addGate = function (getes) {
        this.gates.push(getes);
    };
    Airline.prototype.addManager = function (manager) {
        this.manager.push(manager);
    };
    Airline.prototype.getGate = function (flightNumber) {
        for (var _i = 0, _a = this.flights; _i < _a.length; _i++) {
            var listFlight = _a[_i];
            if (listFlight["flight_number"] === flightNumber) {
                for (var _b = 0, _c = this.gates; _b < _c.length; _b++) {
                    var gate = _c[_b];
                    for (var _d = 0, _e = listFlight["passengers"]; _d < _e.length; _d++) {
                        var listGate = _e[_d];
                        if (listGate["gate"]["gate_number"] === gate["gate_number"]) {
                            return gate["gate_number"];
                        }
                    }
                }
                ;
            }
        }
    };
    Airline.prototype.getFlights = function (date) {
        var listFlights = [];
        for (var _i = 0, _a = this.flights; _i < _a.length; _i++) {
            var listFlight = _a[_i];
            if (listFlight["date_deporture"] === date) {
                listFlights.push(listFlight);
            }
        }
        return listFlights;
    };
    Airline.prototype.getPassenger = function (flight) {
        var listPassenger = [];
        for (var _i = 0, _a = this.flights; _i < _a.length; _i++) {
            var listFilght = _a[_i];
            listPassenger.push(listFilght["passengers"]);
        }
        return listPassenger;
    };
    return Airline;
}());
exports.Airline = Airline;
;
