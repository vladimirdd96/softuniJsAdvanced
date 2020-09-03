let sum = (a, b) => a + b;
let add5 = (sum) => {
    return function (a) {
        return function (b) {
            return sum(a, b);
        };
    };
};
let curryied = (add5(sum));
console.log(curryied(2)(3));
