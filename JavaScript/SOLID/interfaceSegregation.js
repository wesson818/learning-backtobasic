// The main idea of the interface segregation principle is that 
// any class that implements an interface must use all functions/properties of the interface. 
// JavaScript does not have actual interfaces, but a class inheritance structure is similar enough that it works in this instance. 
// This means that any class that inherits from another class needs to use all of the methods/properties from the base class. 
// This encourages writing small classes instead of large classes.

console.log('*** Any class that inherits from another class needs to use all of the methods/properties ***')

// which is the idea of composition

class Entity {
    constructor(name) {
        this.name = name
    }
}

const mover = {
    move() {
        console.log(`${this.name} moved`)
    }
}

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`)
        targetEntity.takeDamage(this.attackDamage)
    }
}

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount
        console.log(`${this.name} has ${this.health} health remaining`)
    }
}

class Character extends Entity {
    constructor(name, attackDamage, health) {
        super(name)
        this.attackDamage = attackDamage
        this.health = health
    }
}

Object.assign(Character.prototype, mover)
Object.assign(Character.prototype, attacker)
Object.assign(Character.prototype, hasHealth)

class Wall extends Entity {
    constructor(name,health){
        super(name)
        this.health = health
    }
}

Object.assign(Wall.prototype, hasHealth)

class Turret extends Entity {
    constructor(name, attackDamage){
        super(name)
        this.attackDamage = attackDamage
    }
}

Object.assign(Turret.prototype, attacker)

const turret = new Turret('Turret',5)
const wall = new Wall('Wall', 200)
const character = new Character('Character',3,100)

turret.attack(character)
character.move()
character.attack(wall)
// turret.move()