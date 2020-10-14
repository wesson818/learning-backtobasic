import {fname,lname,objExample,greet,GreetMessage} from "./moduleB.js"

console.log("fname",fname)
console.log("lname",lname)

objExample.name="Smith"
console.log('objExample.name', objExample.name)

greet("Hello")

let gm = new GreetMessage()
gm.greet()
