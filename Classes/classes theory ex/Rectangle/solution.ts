class Rectangle {
    width: number
    height: number
    color: string

    constructor(width: number, height: number, color: string) {
        this.width = width
        this.height = height
        this.color = color
    }

    calcArea() {
        let area = this.width * this.height
        return area
    }
}
let rect = new Rectangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
