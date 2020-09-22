class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = +length;
    }
    decrease(length) {
        // if (length > this.innerLength) {
        //     this.innerLength = 0
        // } else {
        //     // this.innerLength -= length
        // }
        this.innerLength = Math.max(0, this.innerLength - length);
    }
    increase(length) {
        if (length > this.innerLength) {
            this.innerLength = length;
        }
    }
    toString() {
        if (this.innerLength < this.innerString.length) {
            return `${this.innerString.slice().substring(0, this.innerLength)}...`;
        }
        else {
            return this.innerString;
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
