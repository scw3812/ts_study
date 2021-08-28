"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person15 = void 0;
var Person10 = /** @class */ (function () {
    function Person10() {
    }
    Person10.getInstance = function () {
        if (Person10.INSTANCE) {
            Person10.INSTANCE = new Person10();
        }
        return Person10.INSTANCE;
    };
    return Person10;
}());
Person10.getInstance();
// Lazy Lodaing
var PersonSingletone = /** @class */ (function () {
    function PersonSingletone() {
    }
    return PersonSingletone;
}());
exports.person15 = new PersonSingletone();
