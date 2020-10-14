const { set } = require("lodash");

let myMap = Object.create(null)

myMap.name = "John"
console.log(myMap.name);

myMap[100] = "Hello"
console.log('myMap[100]', myMap[100])

let obj1 = {}
let obj2 = {}

myMap[obj1] = "World"
console.log('myMap[obj1]', myMap[obj1])
console.log('myMap[obj2]', myMap[obj2])


let mySet = new Set()
mySet.add("Hello")
mySet.add(1)
mySet.add(obj1)
mySet.add(obj2)
console.log(mySet.size)

let newSet = new Set([1,2,3,4,4,4,4])
console.log(newSet.size)
console.log(newSet.delete(1));
console.log(newSet.size)
