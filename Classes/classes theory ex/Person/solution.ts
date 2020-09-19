class Person {
    firstName: string
    lastName: string
    age: number
    email: string

    constructor(firstName: string, lastName: string, age: number, email: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
    }

    toString(): string {
        let person = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`

        return person
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());