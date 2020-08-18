const person = {
    id:1,
    firstname:"Wen",
    lastname:"Zhang",
    age:35,
    male: true,
    job:"developer",
    salay:"120000"
}

//loop key in object using for in loop
for(const key in person){
    console.log(`${key}:${person[key]}`)
}

//turn object to value array using Object.values(), return new array
console.log('Object.values(person) :', Object.values(person));
const getNumber = (obj) => {
    return Object.values(obj).filter(val => !isNaN(val) && typeof val!=='boolean')
}
console.log("getNumber:", getNumber(person))

const numberArray = Object.values(person).filter(val => !isNaN(val) && typeof(val)!=='boolean')
console.log('numberArray :', numberArray);

//turn object to 2D array key value pairs using Object.entries, return new object
console.log("Object.entries(person):",Object.entries(person))
const newObj = {}
for(const [key, value] of Object.entries(person)){
    // console.log(`key:${key}|value:${value}`)
    if(!isNaN(value) && typeof(value)!=='boolean') {
        newObj[key] = value
    }
}
console.log('newObj :', newObj);
