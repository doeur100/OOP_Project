"use strict";
exports.__esModule = true;
exports.Seat = exports.TypeOfSeat = void 0;
var TypeOfSeat;
(function (TypeOfSeat) {
    TypeOfSeat[TypeOfSeat["BUSSINESS"] = 0] = "BUSSINESS";
    TypeOfSeat[TypeOfSeat["ECONOMY"] = 1] = "ECONOMY";
})(TypeOfSeat = exports.TypeOfSeat || (exports.TypeOfSeat = {}));
var Seat = /** @class */ (function () {
    function Seat(seat_number, price, passenger) {
        this.seat_number = seat_number;
        this.price = price;
        this.passenger = passenger;
    }
    return Seat;
}());
exports.Seat = Seat;
;
