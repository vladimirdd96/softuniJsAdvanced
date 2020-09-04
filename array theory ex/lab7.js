// function biggestNum(arr: Array<Array<number>>) {
//     let result = 0
//     arr
//         .slice()
//         .map(i => i
//             .map(i => i > result ? result = i : ""))
//     return result
// }
function biggestNum(arr) {
    // return Math.max(...arr.flat(1))
    // return Math.max(...arr.reduce((a, b) => [...a, ...b], []))
    return Math.max(...arr.reduce((a, b) => a.concat(b), []));
}
console.log(biggestNum([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));
