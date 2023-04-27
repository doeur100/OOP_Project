"use strict";
exports.__esModule = true;
exports.Person = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender = exports.Gender || (exports.Gender = {}));
;
var Person = /** @class */ (function () {
    function Person(first_name, last_name, age, gender) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    Person.prototype.addPerson = function () { };
    return Person;
}());
exports.Person = Person;
;
