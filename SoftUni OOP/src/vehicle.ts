export abstract class Vehicle {
    private _fuel: number;
    private _fuelConsumption: number;

    get fuel() {
        return this._fuel;
    }

    get fuelConsumption() {
        return this._fuelConsumption;
    }

    constructor(_fuel: number, _fuelConsumption: number) {
        _fuel = this.fuel;
        _fuelConsumption = this._fuelConsumption;
        this.distancePassed;
        // this.consumption
    }
    distancePassed(name: string, _fuel: number, fuelConsumption: number): string {
        // const distance: number = fuel * this.consumption(fuelConsumption);
        const distance: number = this._fuel * this._fuelConsumption;

        // console.log(this.consumption(fuelConsumption));
        return `"${name}" travelled "${distance}"`;
    }

    // private consumption(fuelConsumption: number): number {
    //     return fuelConsumption += 0.9
    // }

}