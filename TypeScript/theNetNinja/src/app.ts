// run typescript:
// tsc -w
// then Go Live of index.html in public

// interface 
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(amount);
        return amount;
    }
}

const greetPerson = (person: IsPerson) => {
    console.log("hello", person.name);
}

greetPerson(me)
console.log(me)

console.log('--------Class Decorators--------')
import {
    f,
    g,
    sealed,
    classDecorator
} from "./decorators/fg.js";

@sealed
class C {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @f()
    @g()
    method() {
        return "Hello, " + this.greeting;
    }
}

console.log('new C().method()', new C("Wen").method());
// f(): evaluated
// g(): evaluated
// g(): called
// f(): called

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter("world"));

console.log("-----------Playground End Point-----------------")
import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'
import { ListTemplate } from './classes/ListTemplate.js'

let docOne: HasFormatter = new Invoice("jack","web work", 250);
let docTwo: HasFormatter = new Payment('peter',"plumbing work",200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

  
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);
// invoices.push({ 'shaun', 'work on a new thing' 200});

invoices.forEach(inv => {
    // console.log(inv.client, inv.details, inv.amount, inv.format());
    console.log(inv.client, inv.amount, inv.format());
})
console.log(invoices);


const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values:[string,string,number] = [tofrom.value,details.value,amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    console.log(
        type.value, 
        tofrom.value, 
        details.value, 
        amount.valueAsNumber
    );
    console.log('doc', doc);

    list.render(doc,type.value,'end');
    
});