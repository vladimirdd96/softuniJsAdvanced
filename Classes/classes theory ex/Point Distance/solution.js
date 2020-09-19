class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(p1, p2) {
        function diff(num1, num2) {
            if (num1 > num2) {
                return (num1 - num2);
            }
            else {
                return (num2 - num1);
            }
        }
        ;
        let deltaX = diff(p1.x, p2.x);
        let deltaY = diff(p1.y, p2.y);
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
