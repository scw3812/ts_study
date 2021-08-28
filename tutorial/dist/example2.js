"use strict";
var p2 = {
    name: 'Mark'
};
var p22 = {
    name: 'ss',
    age: 27
};
function hello2(person) {
    var _a;
    console.log(person.name + " is " + ((_a = person.age) !== null && _a !== void 0 ? _a : -1));
}
hello2(p2);
