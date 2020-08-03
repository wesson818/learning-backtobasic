const arrayExample: number[] = [1, 3, 4, 5];

let example1: boolean | number = 35;

let example2 = arrayExample.reduce((num1, num2) => num1 + num2);

let example3 = 'Hello world';

let example4: undefined = undefined;

let example5: null = null;

const example6: string[] = ['Hello World'];

const example7: (number | boolean)[] = [1, 2, true];

const example8: boolean[][] = [ [true, false] ] ;

const exampleTuple: [string, number] = ['https://www.YouTube.com/CodingTutorials360', 30];

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

function totalAge(age1: Age, age2: Age) {
    return age1 + age2;
}

function add(val1: number, val2: number): number {
    return val1 + val2;
}

add(1, 10);

class Person {
    firstName: string;
    middleName: string;
    lastName: string;
    
    constructor(data?: any) {
        this.firstName = data.firstName || 'Wen';
        this.lastName = data.lastName || 'Z';
        this.middleName = data.middleName;    
    }
}


function sayHello(person: Person): string {
    return `Say Hello to My Little Friend, ${person.firstName}!`    
}

sayHello(new Person({firstName: 'Wen'}));

