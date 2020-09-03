// function main(input) {
//     let step = input.pop() % input.length;
//     for (let i = 0; i < step; i++) {
//         let curr = input.pop()
//         input.unshift(curr)
//     }
//     return input.join(' ')
// }
function main(input) {
    let step = +input.pop() % input.length;
    return input.reduceRight((acc, curr) => {
        if (step) {
            acc = [curr, ...acc.slice(0, input.length - 1)];
            step--;
        }
        return acc;
    }, [...input]).join(' ');
}
console.log(main(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']));
