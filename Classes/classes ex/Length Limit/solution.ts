class Stringer {
    innerString: string
    innerLength: number

    constructor(innerString: string, innerLength: number) {
        this.innerString = innerString
        this.innerLength = innerLength
    }

    decrease(length: number) {
        if (length > this.innerLength) {
            this.innerLength = 0
        } else {
            this.innerLength -= length
        }
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
