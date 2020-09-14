let alphabeticalSort = (a, b) => a.localeCompare(b);
function store(input) {
    let catalogue = {};
    for (let line of input) {
        let [name, price] = line.split(' : ');
        price = Number(price);
        let initial = name[0];
        if (!catalogue.hasOwnProperty(initial)) {
            catalogue[initial] = {};
        }
        let product = catalogue[initial];
        if (!product.hasOwnProperty(name)) {
            product[name] = price;
        }
        let sortedInitial = Object.keys(catalogue)
            .sort(alphabeticalSort);
        for (let initial of sortedInitial) {
            console.log(initial);
            let product = catalogue[initial];
            let sortedProducts = Object.keys(product)
                .sort(alphabeticalSort);
            for (let p of sortedProducts) {
                console.log(`  ${p}: ${product[p]}`);
            }
        }
    }
}
console.log(store(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']));
