let isItANumber = x => +x ? Number(x).toFixed(2) : x.toString();
function stringToItems(str) {
    let result;
    result = str
        .split("|")
        .filter(x => x !== "")
        .map(x => x.trim());
    return result;
}
function townsToJSON(arr) {
    let result = [];
    let keys = stringToItems(arr[0]);
    let valuesObj1 = stringToItems(arr[1]).map(isItANumber);
    let valuesObj2 = stringToItems(arr[2]).map(isItANumber);
    result.push(`{ "${keys[0]}": "${valuesObj1[0]}", "${keys[1]}": ${+valuesObj1[1]}, "${keys[2]}": ${+valuesObj2[2]} }, { "${keys[0]}": "${valuesObj2[0]}", "${keys[1]}": ${+valuesObj2[1]}, "${keys[2]}": ${+valuesObj2[2]} }`);
    // JSON.parse(result[0])
    return result[0];
}
console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
