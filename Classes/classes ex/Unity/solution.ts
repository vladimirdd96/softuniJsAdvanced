class Rat {
    name: string
    unitedRats: Rat[]
    constructor(name: string) {
        this.name = name
        this.unitedRats = []
    }

    getRats(): Rat[] {
        return this.unitedRats
    }

    unite(otherRat: Rat): void {
        this.unitedRats.push(otherRat)
    }

    toString(): string {
        return `${this.name}\n${this.unitedRats.map(r => `##${r.name}`).join('\n')}`
    }

}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
