// function printEveyNthEl(arr) {
//     let arrCopy = arr.slice()
//     let j = arrCopy.pop()
//     for (let i = 0; i < arr.length; i += +j) {
//         console.log(arr[i]);
//     }
// }
function printEveyNthEl(arr) {
    let isItNthNum = (el, i) => i % j === 0;
    let j = +arr[arr.length - 1];
    return arr.filter(isItNthNum).join('\n');
}
// console.log(printEveyNthEl(['1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6']
// ));
console.log(printEveyNthEl(['dsa',
    'asd',
    'test',
    'tset',
    '2']));
