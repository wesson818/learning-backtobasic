const person = {
    id:1,
    firstname:"John",
    lastname:"Smith",
    age:25,
    male: true,
    job:"developer",
    salay:"90000"
}

//loop key in object using for in loop
for(const key in person){
    console.log(`${key}:${person[key]}`)
}

// turn object to value array using Object.values(), return new array
console.log('Object.values(person) :', Object.values(person));
// [ 1, 'Wen', 'Zhang', 35, true, 'developer', '120000' ]
const getNumber = (obj) => {
    return Object.values(obj).filter(val => !isNaN(val) && typeof val!=='boolean')
}
console.log("getNumber:", getNumber(person))

const numberArray = Object.values(person).filter(val => !isNaN(val) && typeof(val)!=='boolean')
console.log('numberArray :', numberArray);
// numberArray : [ 1, 35, '120000' ]

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

// use console.time and console.timeEnd to tracking run time
const benchmarkObj = size => {
    console.time('benchmarkObj');
    var obj = {};
    for (var i = 0; i < size; i++) obj[i] = i;
    for (var i = 0; i < size; i++) var x = obj[i];
    console.timeEnd('benchmarkObj');
  }
  
  var size = 1000000;
  benchmarkObj(size);