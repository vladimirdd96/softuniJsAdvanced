// function extrIncSeq(arr) {
//     let biggest = 0
//     return (arr.map((a) => {
//         if (a >= biggest) {
//             biggest = a
//             return biggest;
//         }
//     }))
// }
function extrIncSeq(arr) {
    let result = arr.reduce((acc, curr) => {
        if (curr >= Math.max(...acc)) {
            acc.push(curr);
        }
        return acc;
    }, []);
    return result.join('\n');
}
console.log(extrIncSeq([20,
    3,
    2,
    15,
    6,
    1,
    20]));
