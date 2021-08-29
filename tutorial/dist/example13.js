"use strict";
function overloads(arg, another) {
    if (typeof arg === 'string') {
        return another ? arg.length : arg.length - 1;
    }
}
console.log(overloads('ssdfsdf'));
console.log(overloads('df', false));
