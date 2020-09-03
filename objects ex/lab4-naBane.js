function solve(data) {
    let catalog = new Map();

    for (let row of data) {
        let [product, price] = row.split(" : ");

        if (!catalog.has(product[0])) {
            catalog.set(product[0], new Map());
        }
        catalog.get(product[0]).set(product, price);

    }
    let sortedCatalog = [...catalog].sort((a, b) => a[0].localeCompare(b[0]))
    for (let [letter, products] of sortedCatalog) {
        let sorted = [...products].sort((a, b) => a[0].localeCompare(b[0]));
        console.log(letter);
        for (let [key, value] of sorted) {
            console.log(`${key}: ${value}`)
        }
    }
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
))