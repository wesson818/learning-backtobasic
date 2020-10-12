let firstname = "John"
let lastname = "Smith"

const person = {
    firstname,
    lastname
}

console.log('person', person)

const createPerson = (firstName, lastName, age) => {
    const fullName = firstName + " " + lastName
    return {
        firstName,
        lastName,
        fullName,
        isSenior() {
            return age>60
        }
    }
}

let p = createPerson("Peter", "Jackson", 35)
console.log('p', p)
console.log('p.firstName', p.firstName)
console.log('p.lastName', p.lastName)
console.log('p.fullName', p.fullName)
console.log('p.isSenior()', p.isSenior())

let ln = "last name"
let space_person = {
    "first name": "Jack",
    [ln]: "Ma"
}
console.log('space_person', space_person)
console.log('first name',space_person['first name'])
console.log('last name', space_person[ln])
