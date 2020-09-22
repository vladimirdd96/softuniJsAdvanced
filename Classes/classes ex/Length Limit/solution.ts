class Stringer {
    innerString: string
    innerLength: number

    constructor(string: string, length: number) {
        this.innerString = string
        this.innerLength = +length
    }

    decrease(length: number) {
        // if (length > this.innerLength) {
        //     this.innerLength = 0
        // } else {
        //     // this.innerLength -= length
        // }
        this.innerLength = Math.max(0, this.innerLength - length)
    }

    increase(length: number) {
        if (length > this.innerLength) {
            this.innerLength = length
        }
    }

    toString(): string {
        if (this.innerLength < this.innerString.length) {
            return `${this.innerString.slice().substring(0, this.innerLength)}...`
        } else {
            return this.innerString
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test

test.decrease(1);
console.log(test.toString()); // ...