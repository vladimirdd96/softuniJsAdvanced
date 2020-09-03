function magicMatrices(arr: Array<Array<number>>) {
    let sumRows = []
    let sumCols = []
    let result = []

    for (let i = 0; i < arr.length; i++) {
        sumRows.push(arr[i].reduce((acc, curr) => acc + curr, 0))
        sumCols.push(arr.map(x => x[i]).reduce((acc, curr) => acc + curr))

        if (sumRows[i] === sumCols[i]) {
            result.push(true)
        } else {
            result.push(false)
        }

    }
    if (result[0] === result[1] && result[1] === result[2] && result[2] === true) {
        return true
    } else return false
}

console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
));