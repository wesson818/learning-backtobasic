// Note: rest operator is in function declaration, but spread operator is specify in function call
// rest operator
function add(...numbers){
    let total = numbers.reduce((currentTotal,num)=>{
        return currentTotal+num
    },0);

    console.log(total)
}

add(4,5)

add(4,5,6,7,8,10)

let arr = [2,3,5];
add(arr)
// spread operator: see difference add(arr) and add(...arr)
add(...arr)

// spread operator

let contacts = ["Mary", "Joe", "Danny"]

let personalFriends = ["Peter", ...contacts, "Smith"]

contacts.push("John")

console.log(personalFriends)

let person = {
    name: "Adam",
    age: 25,
    city: "Melbourne"
}

let employee = {
    ...person,
    salary: 100000,
    position: "Front End Developer"
}

console.log(employee)