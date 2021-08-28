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
var Parent8 = /** @class */ (function () {
    function Parent8(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Parent8.prototype.hello = function () {
        console.log(this._name, this._age);
    };
    return Parent8;
}());
var Child8 = /** @class */ (function (_super) {
    __extends(Child8, _super);
    function Child8() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._name = "ccc";
        return _this;
    }
    return Child8;
}(Parent8));
new Child8("changwoo", 27).hello();
