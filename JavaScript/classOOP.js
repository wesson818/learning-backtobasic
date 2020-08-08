// Class: Similar to a blueprint. It defines what its objects will look like (functions, parameters, etc.)
// Object: Similar to a house produced from a blueprint. It is an instance of a class and contains all the specific details of the class that are not shared with any of the other objects, such as the color for a house.
// Constructor: This is the method that is called when creating an object from a class. 
//              It is usually used to set all of the specific details of the object such as color in the house example.
// New: The new keyword is used before a class name to create an object using the class constructor.

export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    
    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }
    
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
    
    static return10() {
        return 10;
    }
}

export class Cat extends Animal {
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}

export class Player {
    constructor(Name, Country){
        this.Name = Name;
        this.Country = Country;
    }

    get playerBorn(){
        return `${this.Name} was born in ${this.Country}`
    }
}

export class TennisPlayer extends Player{
    constructor(Name,Country,Age){
        super(Name,Country)
        this.Age = Age;
    }

    playTennis(){
        return `${this.Name} is ${this.Age} years old and know how to play Tennis`
    }

}