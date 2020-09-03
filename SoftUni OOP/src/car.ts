import { Vehicle } from "./vehicle";


export class Car extends Vehicle {
    private _summerAirConsumption = 0.9;
    private _name = 'Car';

    get summerAirConsumption() {
        return this._summerAirConsumption;
    }

    consumption(arg0: number) {
        throw new Error("Method not implemented.");
    }
    constructor(_fuel: number, _fuelConsumption: number) {
        super(_fuel, _fuelConsumption);
        // this.distancePassed('Car', fuel, fuelConsumption);
        // this.consumption(fuelConsumption);
        this.distancePassed(this._name, _fuel, _fuelConsumption);
    }







    // distancePassed(arg0: string, arg1: number, arg2: number): string {
    //     throw new Error("Method not implemented.");
    // }
    // consumption(arg0: number): number {
    //     throw new Error("Method not implemented.");
    // }
    // this.distancePassed(name, fuel, fuelConsumption);
    // this.consumption(fuelConsumption);




}