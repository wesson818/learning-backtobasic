// object
const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {name, age, projects:{diceGame}} = student

console.log(`${name} is ${age} year old and work on ${diceGame}`)

// arrays
let names = ['Dylan', 'Coding God', 'Israel']

let [firstName, middleName, lastName] = names

console.log(middleName)

// function
function addressMaker({city,state}) {
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}`)
}

addressMaker({city: 'Austin', state: 'Texas'});
