let fruit = (type, weight, price) => {
    weight = weight / 1000;
    let sum = Math.round(price * weight * 100) / 100;
    return `I need ${sum.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`;
};
console.log(fruit('orange', 2500, 1.80));
