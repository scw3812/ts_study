"use strict";
var p41 = {
    name: 'Mark',
    hello: function (age) {
        console.log(this.name, age);
    }
};
var p42 = {
    name: 'Mark',
    hello: function (age) {
        console.log(this.name, age);
    }
};
var p43 = {
    name: 'changwoo',
    hello: function (age) {
        console.log(p43.name, age);
    }
};
p41.hello(24);
p42.hello(24);
p43.hello(24);
