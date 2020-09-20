type StringOrNumber = string | number;
type ObjectWithName = { name: string, uid: StringOrNumber};

const logDetails = (uid: StringOrNumber, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: ObjectWithName) => {
    console.log(`${user.name} says hello`);
}

const greetBack = (user: ObjectWithName) => {
    console.log(`${user.name} says hello back`);
}