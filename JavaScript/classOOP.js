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