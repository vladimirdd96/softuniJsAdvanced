import { Vehicle } from "./vehicle";


export class Truck extends Vehicle {
    constructor(fuel: number, fuelConsumption: number) {
        super(fuel, fuelConsumption);
    }


    // distancePassed(fuelQuantity: number, fuelConsumption: number): number {
    //     const distance: number = this.fuel * this.fuelConsumption;
    //     return distance;
    // }
    //
    // fuelLossTank(fuelConsumption: number): number {
    //     return this.fuelConsumption = this.percentageConsumption(fuelConsumption, 95);
    // }
    //
    //
    // percentageConsumption(num: number, per: number): number {
    //     return (num / 100) * per;
    // }
    //
    // summerConsumption(fuelConsumption: number): number {
    //     const consumption = this.fuelConsumption += this.fuelLoss + this.summerAirConsumption
    //     return consumption
    // }
}