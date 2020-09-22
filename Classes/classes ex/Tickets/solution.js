class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
function solve(input, criteria) {
    return input
        .reduce((prev, line) => {
        let [destination, price, status] = line.split('|');
        let ticket = new Ticket(destination, price, status);
        prev.push(ticket);
        return prev;
    }, [])
        .sort((a, b) => {
        if (typeof a[criteria] === 'string') {
            return a[criteria].localeCompare(b[criteria]);
        }
        else {
            return a[criteria] - b[criteria];
        }
    });
}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'destination'));
