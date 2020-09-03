let compareLengthAlphabet = (a, b) => a.length - b.length || a.localeCompare(b);
let compareAlphabet = (a, b) => a.localeCompare(b);
function sortArr(arr) {
    return arr.sort(compareLengthAlphabet);
}
// console.log(sortArr(['alpha',
//     'beta',
//     'gamma']
// ));
// console.log(sortArr(['Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George']
// ));
console.log(sortArr(['test',
    'Deny',
    'omen',
    'Default']));
