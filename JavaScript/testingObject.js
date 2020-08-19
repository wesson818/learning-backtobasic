const persons = [
    {
    "id":1,
    "firstname":"John",
    "lastname":"Smith",
    "male": true,
    "number":"0456555666"
    },
    {
    "id":2,
    "firstname":"Peter",
    "lastname":"Don",
    "male": true,
    "number":"0456888666"
    },
]

const personsNumberArray = persons.map((person)=>{
    return person.number
})
// console.log("personsNumberArray", personsNumberArray)

const personsNumberObj = {}
for(const i in persons){
    console.log("persons[i]", persons[i])
    for(const [key,value] of Object.entries(persons[i])){   
       if(key=="firstname"){
            personsNumberObj[key+i] = value;
        }
       if(key=="number"){
           personsNumberObj[key+i] = value;
       }
    }
}
console.log("personsNumberObj", personsNumberObj)
