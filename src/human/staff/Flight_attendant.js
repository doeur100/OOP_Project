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
exports.Flight_attendant = void 0;
var Manager_1 = require("../Manager");
var Flight_attendant = /** @class */ (function (_super) {
    __extends(Flight_attendant, _super);
    function Flight_attendant(salary, first_name, last_name, age, gender) {
        return _super.call(this, salary, first_name, last_name, age, gender) || this;
    }
    return Flight_attendant;
}(Manager_1.Manager));
exports.Flight_attendant = Flight_attendant;
;
