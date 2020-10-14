export let fname = "Peter"
export let lname = "Jackson"
export const objExample = {
    name: "John"
}

export function greet(message) {
    console.log('message', message)
}

export class GreetMessage{
    constructor(){
        console.log("constructor")
    }
    greet(){
        console.log('greet function')
    }
}