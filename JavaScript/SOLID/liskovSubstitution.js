// The main idea of the Liskov substitution principle is that 
// any function/module that interacts with a class should also be able to interact with all subclasses of that class without breaking. 
// This essentially means that a class is interchangeable with its subclasses.

console.log('*** a class should be able to interact with all subclasses ***')

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    setWidth(width) {
        this.width = width
    }

    setHeight(height) {
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

// Square broke liskov substitution, because it changed height when width changed
// could create Shape and change inheritance to Shape.
class Square extends Rectangle {
    setWidth(width) {
        this.width = width
        this.height = width
    }
    setHeight(height) {
        this.height = height
        this.width = height
    }
}

function increaseRectangleWidth(rectangle) {
    rectangle.setWidth(rectangle.width+1)
}

const rectangle1 = new Rectangle(10,2)
const rectangle2 = new Rectangle(5,5)
const square = new Square(5,5)

increaseRectangleWidth(rectangle1)
increaseRectangleWidth(rectangle2)
increaseRectangleWidth(square)

console.log(rectangle1.area())
console.log(rectangle2.area())
console.log(square.area())

