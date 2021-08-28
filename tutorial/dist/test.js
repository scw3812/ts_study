"use strict";
var myName = 'mark';
var myAge = 26;
function add(a) {
    console.log(a + 10);
}
add(myAge);
var tu = ['hi', 1];
function leakingAny(val) {
    var a = val.num;
    return a;
}
leakingAny({ num: 3 });
