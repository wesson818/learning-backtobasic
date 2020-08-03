// import { Person } from './person.interface';
import {Person} from './person.model'

const example1: Person = {firstName: 'Dollan', middleName: 'Dollan', lastName: 'Dollan'};

example1.firstName = 'D';
example1.middleName = 'Coding God';
example1.lastName = 'AI';




import { Bear, Man, Pig } from './interfaces';

type ManBearPig = Bear & Man & Pig

let manBearPig: ManBearPig ;
manBearPig.firstName = 'Dan';
manBearPig.claws = 2;
manBearPig.bacon = false;