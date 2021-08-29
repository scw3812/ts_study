"use strict";
var Person12 = /** @class */ (function () {
    function Person12(name) {
        this.name = name;
    }
    return Person12;
}());
new Person12('sdfs');
var personGeneric = {
    name: 'sdfsdf',
    age: 12
};
function getProperty(person, key) {
    return person[key];
}
console.log(getProperty(personGeneric, "name"));
function setProperty(person, key, value) {
    person[key] = value;
}
setProperty(personGeneric, 'name', 'changwoo');
console.log(getProperty(personGeneric, "name"));
