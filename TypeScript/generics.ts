
// const addUID = (obj: Object) => {
//     let uid = Math.floor(Math.random()*100);
//     return {...obj, uid};
// }

// let docOne = addUID({name:"John",age:20});

// console.log('docOne', docOne.name) // doesn't work


const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid};
}

let docOne = addUID({name:"John",age:20});
// let docTwo = addUID("Hello");

console.log('docOne', docOne.name)

// Enums
enum ResourceType { 
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}


// with interface 
interface Resource<T> {
    uid: number;
    resourceType: ResourceType | number;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: "this is a string"
}

const docFour: Resource<object> = {
    uid: 1,
    resourceType: 3,
    data: {age: 20}
}
