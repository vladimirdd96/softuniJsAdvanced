function solve2(operator, ...params) {
    return params
        .reduce(evall(...params));
}


function evall(a, b) {
    eval(`${a} ${operator} ${b}`),
        params.shift()
}

console.log(solve2("+", 5, 6));