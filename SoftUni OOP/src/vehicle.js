"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(_fuel, _fuelConsumption) {
        _fuel = this.fuel;
        _fuelConsumption = this._fuelConsumption;
        this.distancePassed;
        // this.consumption
    }
    Object.defineProperty(Vehicle.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "fuelConsumption", {
        get: function () {
            return this._fuelConsumption;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.distancePassed = function (name, _fuel, fuelConsumption) {
        // const distance: number = fuel * this.consumption(fuelConsumption);
        var distance = this._fuel * this._fuelConsumption;
        // console.log(this.consumption(fuelConsumption));
        return "\"" + name + "\" travelled \"" + distance + "\"";
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
