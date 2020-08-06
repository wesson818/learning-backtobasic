import { Bear } from './bear.model';

const bear = new Bear({name: 'Pola', tail: true})

bear.claws = 3
bear.add(1,2)

// private: cannot call
// bear.addTwo(1,2) 