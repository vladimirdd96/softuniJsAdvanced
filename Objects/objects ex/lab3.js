function cappyJuice(input) {
    let juice = {};
    let bottles = {};
    input
        .forEach(line => {
        let [name, quantity] = line.split(' => ');
        quantity = Number(quantity);
        if (!juice.hasOwnProperty(name)) {
            juice[name] = 0;
        }
        juice[name] += quantity;
        let currentQuantity = juice[name];
        if (currentQuantity >= 1000) {
            bottles[name] = Math.trunc(currentQuantity / 1000);
        }
    });
    let keys = Object.keys(bottles);
    for (let name of keys) {
        let quantiry = bottles[name];
        console.log(`${name} => ${quantiry}`);
    }
    // console.log(bottles);
}
console.log(cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]));
