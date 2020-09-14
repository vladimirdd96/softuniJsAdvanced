const sum = (x, y) => x + y;
const inverseSum = (x, y) => x + 1 / y;
const conc = (x, y) => `${x}${y}`;
function aggregateEl(...params) {
    return [
        params.reduce(sum, 0),
        params.reduce(inverseSum, 0),
        params.reduce(conc, ""),
    ];
}
console.log(aggregateEl(1, 2, 3));
