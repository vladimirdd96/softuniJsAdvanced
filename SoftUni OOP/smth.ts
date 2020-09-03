let carInput: FirstInput;
// carInput[0] = prompt('Enter type of vehicle,');
// carInput[1] = prompt('Enter fuel quantity');
// carInput[2] = prompt('Enter liters per km ');

let truckInput: FirstInput;
// truckInput[0] = prompt('Enter type of vehicle,');
// truckInput[1] = prompt('Enter fuel quantity');
// truckInput[2] = prompt('Enter liters per km ');


// const secondInput: (Array<string> | Array<number>) = [];
// secondInput[0] = prompt('Enter number of commands u want to ener afterwards')
// for (let i = 0; i < +secondInput[0]; i++) {
//     secondInput[i] = prompt('On the next N lines – commands in format: Drive Car {distance}')
//     secondInput[i + 1] = prompt('command type: Drive Truck {distance}')
//     secondInput[i + 2] = prompt('command type: Refuel Car {liters}')
//     secondInput[i + 3] = prompt('command type: Refuel Truck {liters}')
// }


const car = new Car(carInput[0], +carInput[1], +carInput[2])
const truck = new Truck(truckInput[0], truckInput[1], truckInput[2])