function smallestTwoNum(arr) {
    return arr
        .slice()
        .sort((a, b) => a - b)
        .slice(0, 2).join(' ');
}
console.log(smallestTwoNum([30, 15, 50, 5]));
