let argMap = {
    "asc": (a, b) => a - b,
    "desc": (a, b) => b - a
};
function sortArray(arr, arg) {
    let newArr = [];
    arg === "asc" ? newArr = arr.slice().sort(argMap.asc) : newArr = arr.slice().sort(argMap.desc);
    return newArr;
}
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
