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
var Person7 = /** @class */ (function () {
    function Person7() {
        this._name = "dsfs";
        this.age = 0;
    }
    Object.defineProperty(Person7.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Person7;
}());
console.log(new Person7().name);
console.log(new Person7().age);
var Parent7 = /** @class */ (function () {
    function Parent7() {
        this._privateProp = "";
        this.protectedProp = "";
    }
    return Parent7;
}());
var Child7 = /** @class */ (function (_super) {
    __extends(Child7, _super);
    function Child7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child7.prototype.hello = function () {
        this.protectedProp = "protected";
        return this.protectedProp;
    };
    return Child7;
}(Parent7));
console.log(new Child7().hello());
var ConstructorExam = /** @class */ (function () {
    function ConstructorExam(name) {
        this.name = name;
    }
    return ConstructorExam;
}());
console.log(new ConstructorExam("sdf").name);
