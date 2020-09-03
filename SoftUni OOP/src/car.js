"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var vehicle_1 = require("./vehicle");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(_fuel, _fuelConsumption) {
        var _this = _super.call(this, _fuel, _fuelConsumption) || this;
        _this._summerAirConsumption = 0.9;
        _this._name = 'Car';
        // this.distancePassed('Car', fuel, fuelConsumption);
        // this.consumption(fuelConsumption);
        _this.distancePassed(_this._name, _fuel, _fuelConsumption);
        return _this;
    }
    Object.defineProperty(Car.prototype, "summerAirConsumption", {
        get: function () {
            return this._summerAirConsumption;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.consumption = function (arg0) {
        throw new Error("Method not implemented.");
    };
    return Car;
}(vehicle_1.Vehicle));
exports.Car = Car;
