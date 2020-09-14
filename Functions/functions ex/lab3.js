let sameNum = (a) => {
    let num = a.toString().split('');
    let isSame;
    let firstNum = num[0];
    let sum;
    sum = num.map(a => +a).reduce((a, b) => a + b);
    isSame = num.filter(x => x !== firstNum).pop();
    console.log(isSame ? false : true);
    // console.log(sum);
    // console.log(firstNum);
    return sum;
};
console.log(sameNum(1234));
