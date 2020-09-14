const sum = (x: number, y: number) => x + y;
const inverseSum = (x: number, y: number) => x + 1 / y;
const conc = (x: number, y: number) => `${x}${y}`

function aggregateEl(...params) {
    return [
        params.reduce(sum, 0),
        params.reduce(inverseSum, 0),
        params.reduce(conc, ""),
    ]
}

console.log(aggregateEl(1, 2, 3));