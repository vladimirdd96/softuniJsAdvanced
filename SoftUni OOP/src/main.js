"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
// class Main {
//     public static main(args: Array<string>): void {
//         // let rl = readline.createInterface({
//         //     input: process.stdin,
//         //     output: process.stdout
//         // });
//         // let input = rl.line.split("\\s+")
//         // const car = new Car(+input[1], +input[2]);
//         // input = rl.line.split("\\s+")
//         // const truck = new Truck(+input[1], +input[2]);
//         // let n = +(rl.setPrompt('enter number of commands'))
//         // while (n-- < 0) {
//         //     const tokens = rl.line.split("\\s+");
//         // if (tokens[0] === 'Drive') {
//         //     if (tokens[1] === 'Car') {
//         //         car.drive()
//         //     } else {
//         //         car.refuel()
//         //     }
//         // }
//         // }
//         const car = new Car(15, 0.3);
//         // const carDistance = Vehicle.distancePassed('Car', 15, 0.3);
//         // const carCons = car.consumption(0.3);
//         console.log(car.distancePassed('Car', 15, 0.3));
//         // console.log(carCons);
//     }
// }
function sof() {
    var car = new car_1.Car(15, 0.3);
    console.log(car.distancePassed('Car', 15, 0.3));
}
sof();