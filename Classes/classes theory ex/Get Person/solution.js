class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        let person = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        return person;
    }
}
let anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
let softuni = new Person('SoftUni', null, null, null);
let stephan = new Person('Stephan', 'Johnson', 24, '');
let gabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
console.log(`anna: ${anna.toString()},
    softuni: ${softuni.toString()},
    anna: ${stephan.toString()},
    anna: ${gabriel.toString()}`);
