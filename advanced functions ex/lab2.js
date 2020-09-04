function argumentsInfo(a, b, c) {
    let str = [];
    let num = [];
    let funct = [];
    let isItString = (a => typeof a === "string" ? true : false);
    let isItNumber = (a => typeof a === "number" ? true : false);
    let isItFunction = (a => typeof a === "function" ? true : false);
    if (isItString) {
        str.push(a);
        str.push(1);
    }
    if (isItNumber) {
        num.push(b);
        num.push(1);
    }
    if (isItFunction) {
        funct.push(c);
        funct.push(1);
    }
    console.log(`string: ${str[0]}
    number: ${num[0]}
    function: ${funct[0]}
    string = ${str[1]}
    number = ${num[1]}
    function = ${funct[1]}`);
}
console.log(argumentsInfo('cat', 42, function () { console.log('Hello world!'); }));
