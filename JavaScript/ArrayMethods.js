// JavaScript Array Methods
const items = [{
        name: 'ball',
        points: 2
    },
    {
        name: 'coin',
        points: 3
    },
    {
        name: 'candy',
        points: 4
    }
];

const numbers = [1,2,3,4,5]

const strings = 'Learning JavaScript is fun'

// filter
const filterResult = items.filter((item) => {
    return item.points <= 3
})
console.log("filterResult",filterResult)
//filterResult [{name: 'ball',points: 2},{name: 'coin',points: 3}]

// map
const mapResult = items.map((item) => {
    return item.name
})
console.log("mapResult",mapResult)
//mapResult ['ball','coin','candy']

// reduce
const reduceResult = items.reduce((currentTotal, item)=>{
    return item.points + currentTotal
},0)
console.log("reduceResult",reduceResult)
//"reduceResult" 9

// find
const findResult = items.find((item)=>{
    return item.name === 'coin'
})
console.log("findResult",findResult)
//findResult {name: 'coin', points: 3}

// forEach
items.forEach((item)=>{
    console.log("forEachResult",item.name)
})
//forEachResult ball
//forEachResult coin
//forEachResult candy

// for of loop
let total = 0
for (const number of numbers) {
    total += number
}
console.log(`total: ${total}`);
// total: 15

// string iterator
for (const char of strings) {
    console.log(char)
}

// some
const someResult = items.some((item)=>{
    return item.points < 4
})
console.log("someResult",someResult)
//someResult true

// every
const everyResult = items.every((item) => {
    return item.points <= 5
})
console.log("everyResult",everyResult)
//everyResult true

// includes
const includesResult = numbers.includes(7)
console.log("includesResult",includesResult)
//includesResult false
