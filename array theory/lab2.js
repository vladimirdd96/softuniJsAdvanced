let isNumEven = (num, index) => {
    return index % 2 === 0;
};
// function evenPositionEl(input) {
//     let evenNumIndex = ""
//     input.map((el, i) => {
//         if (isNumEven(i)) {
//             evenNumIndex += ` ${el}`
//         }
//     })
//     return evenNumIndex
// }
function evenPositionEl(input) {
    return input
        .filter(isNumEven)
        .join(" ");
}
console.log(evenPositionEl(['20', '30', '40']));
