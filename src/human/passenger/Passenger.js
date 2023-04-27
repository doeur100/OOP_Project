"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Passenger = void 0;
var Person_1 = require("../Person");
var Passenger = /** @class */ (function (_super) {
    __extends(Passenger, _super);
    function Passenger(first_name, last_name, age, gender, bag) {
        var _this = _super.call(this, first_name, last_name, age, gender) || this;
        _this.meals = [];
        _this.bag = bag;
        return _this;
    }
    Passenger.prototype.addMeal = function (meal) {
        var _a;
        (_a = this.meals) === null || _a === void 0 ? void 0 : _a.push(meal);
    };
    return Passenger;
}(Person_1.Person));
exports.Passenger = Passenger;
;
