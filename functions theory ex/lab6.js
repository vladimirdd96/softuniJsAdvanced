function squareSymbols(p = "* ", a = 5) {
    let result = new Array(a);
    for (let i = 0; i < a; i++) {
        result[i] = `${p}`.repeat(a).trim().split("").join(" ");
    }
    return result.join('\n');
}
console.log(squareSymbols("* ", 5));
