// rest operator
function add(...numbers){
    console.log(numbers)
}

add(4,5,6,7,8,10)

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