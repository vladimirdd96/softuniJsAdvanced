function sum(n, m) {
    var result = 0;
    for (var i = Number(n); i <= Number(m); i++) {
        result += i;
    }
    return result;
}
var a = +"1", b = +"5", c = +"-8", d = +"20";
console.log(sum(a, b));
console.log(sum(c, d));
