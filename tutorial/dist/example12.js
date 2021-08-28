"use strict";
var Person12 = /** @class */ (function () {
    function Person12(name) {
        this.name = name;
    }
    return Person12;
}());
var person12 = new Person12('sdfs');
function getProperty(person, key) {
    return person[key];
}
console.log(getProperty(person12, "name"));
function setProperty(person, key, value) {
    person[key] = value;
}
setProperty(person12, 'name', 'changwoo');
console.log(getProperty(person12, "name"));
