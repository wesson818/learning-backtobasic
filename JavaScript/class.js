/** Classes are a template for creating objects. They encapsulate data with code to work on that data. 
 * Classes in JS are built on prototypes but also have some syntax 
 * and semantics that are not shared with ES5 classalike semantics.
 **/

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.
// this will throw a ReferenceError

// const p = new Rectangle(); // ReferenceError
// class Rectangle {}

/** The static keyword defines a static method or property for a class. 
 * Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance.
 * */
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    
    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}
  
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755