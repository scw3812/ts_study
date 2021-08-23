"use strict";
function helloGeneric(message) {
    return message;
}
helloGeneric(33);
helloGeneric('sdc');
function helloArray(array) {
    return array[0];
}
console.log(helloArray(['hello', 'world']));
console.log(helloArray(['hello', 5]));
function helloTuple(message) {
    return message[0];
}
console.log(helloTuple(['hello', 5]));
var helloArrow = function (message) {
    return message;
};
