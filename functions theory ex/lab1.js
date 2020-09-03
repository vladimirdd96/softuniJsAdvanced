function solve() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var sum = params.reduce(function (a, b) { return a + b.length; }, 0);
    var avrg = Math.floor(sum / params.length);
    return [sum, avrg];
}
console.log(solve('chocolate', 'ice cream', 'cake'));
function solveStupid(x, y, z) {
    var sum = x.length + y.length + z.length;
    var avrg = Math.floor(sum / 3);
    return [sum, avrg];
}
console.log(solveStupid('chocolate', 'ice cream', 'cake'));
