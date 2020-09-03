var biggestNum = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var result;
    result = params.sort(function (a, b) { return a - b; }).pop();
    var result2 = "The largest number is " + result;
    return result2;
};
console.log(biggestNum(-3, -5, -22.5, 2, 3, 99));
