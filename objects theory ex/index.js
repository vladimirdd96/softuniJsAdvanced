function countWordsInText(text) {
    let result;
    let i = 0;
    let obj = {};
    result = text.match(/\w+/gim);
    let count = result.map((a, b) => {
        result = a;
        result === b ? i++ : i;
    });
    //     return result
    // })
    console.log(result);
    return result;
}
console.log(countWordsInText(`Far too slow, you're far too slow.`));
