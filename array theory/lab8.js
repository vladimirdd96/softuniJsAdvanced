function diagonalSum(arr) {
    let first = 0;
    let second = 0;
    for (let row = 0; row < arr.length; row++) {
        first += arr[row][row];
        second += arr[row][arr.length - 1 - row];
    }
    return [first, second];
}
console.log(diagonalSum([[20, 40],
[10, 60]]));
