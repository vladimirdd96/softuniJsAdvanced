let calorieObj = (arr) => {
    let obj = {};

    for (let i = 0; i < arr.length; i += 2) {
        let element = arr[i]
        let value = +arr[i + 1]

        obj[element] = value
    }
    return obj
}

console.log(calorieObj(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]))