function functionalSum(...params) {

    return function (b) {
        return a + b
    }
}

let add = functionalSum
let add5 = functionalSum(5)
console.log(add(1));
console.log(add(1)(6)(-3));
console.log(add5(5));