let example1: boolean | number = 35;
example1 = true;

const arrayExample: number[] = [1, 3, 4, 5];
let example2 = arrayExample.reduce((num1, num2) => num1 + num2);

let example3: string = 'Hello world';
example3 = `Here is a example ${example1}
 with multiple lines`

let example4: undefined = undefined;

let example5: null = null;

const arrayExample1: number[] = [1, 3, 4, 5];
// same with arrayExample1
const arrayExample2: Array<number> = [1, 3, 4, 5]; 

const example6: string[] = ['Hello World'];

const example7: (number | boolean)[] = [1, 2, true];

const example8: boolean[][] = [ [true, false] ] ;

// tuple must be erectly match
const exampleTuple: [string, number] = ['https://www.YouTube.com/CodingTutorials360', 30];

enum Color {Red=5, Green, Blue};
let c: Color = Color.Green;
console.log(c);

// unknown type
let myVar: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === "object" && "name" in obj
}
if(hasName(myVar)){
    console.log(myVar.name);
}

// (myVar as string).toUpperCase();


class Bear {
    claws: number;
    
    constructor(data: number) {
        this.claws = data;
    }
}

const bear = new Bear(3);

if (bear instanceof Bear) {
    console.log("Hello from TypeScript");
}

enum Age {
    mine = 35,
    mother = 59
}

// ? is option value
function totalAge(age1: Age, age2?: Age): number {
    if (age2) {
        return age1 + age2;
    } else {
        return age1;
    }
}

totalAge(Age.mine,Age.mother);
totalAge(35,50);
totalAge(35);

interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function sayHello(person: Person): string {
    return `Say Hello to My Little Friend, ${person.firstName}!`    
}

let p = {
    firstName: "Wen",
    lastName: "Z"
}
sayHello(p);

class Employee {
    firstName: string;
    middleName: string;
    lastName: string;
    
    constructor(data?: any) {
        this.firstName = data.firstName || 'Wen';
        this.lastName = data.lastName || 'Z';
        this.middleName = data.middleName;    
    }

    greet() {
        console.log(`Hey ${this.firstName}`)
    }
}

const emp = new Employee({firstName: 'Wenjing'});
sayHello(emp);
emp.greet();

class Manager extends Employee {
    constructor(name: string) {
        super(name);
    }
    delegateWork() {
        console.log("Manager delegating tasks");
    }
}

let m = new Manager('Wesson');
m.delegateWork();
m.greet();
console.log(m.firstName)