"use strict";
exports.__esModule = true;
exports.Booking = exports.TypeOfBooking = void 0;
var TypeOfBooking;
(function (TypeOfBooking) {
    TypeOfBooking[TypeOfBooking["RETURN"] = 0] = "RETURN";
    TypeOfBooking[TypeOfBooking["UNRETURN"] = 1] = "UNRETURN";
})(TypeOfBooking = exports.TypeOfBooking || (exports.TypeOfBooking = {}));
;
var Booking = /** @class */ (function () {
    function Booking(flight, referenceNumber, typeOfBooking) {
        this.flight = flight;
        this.referenceNumber = referenceNumber;
        this.typeOfBooking = typeOfBooking;
    }
    Booking.prototype.getInformationPassenger = function (referenceNumber) {
        if (referenceNumber === this.referenceNumber) {
            return this.flight;
        }
    };
    ;
    return Booking;
}());
exports.Booking = Booking;
