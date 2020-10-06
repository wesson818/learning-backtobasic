// run typescript:
// tsc -w
// then Go Live of index.html in public
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const me = {
    name: 'Shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
console.log(me);
console.log('--------Class Decorators--------');
import { f, g, sealed, classDecorator } from "./decorators/fg.js";
let C = class C {
    constructor(message) {
        this.greeting = message;
    }
    method() {
        return "Hello, " + this.greeting;
    }
};
__decorate([
    f(),
    g()
], C.prototype, "method", null);
C = __decorate([
    sealed
], C);
console.log('new C().method()', new C("Wen").method());
// f(): evaluated
// g(): evaluated
// g(): called
// f(): called
let Greeter = class Greeter {
    constructor(m) {
        this.property = "property";
        this.hello = m;
    }
};
Greeter = __decorate([
    classDecorator
], Greeter);
console.log(new Greeter("world"));
console.log("-----------Playground End Point-----------------");
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
let docOne = new Invoice("jack", "web work", 250);
let docTwo = new Payment('peter', "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push({ 'shaun', 'work on a new thing' 200});
invoices.forEach(inv => {
    // console.log(inv.client, inv.details, inv.amount, inv.format());
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invoices);
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    console.log('doc', doc);
    list.render(doc, type.value, 'end');
});
