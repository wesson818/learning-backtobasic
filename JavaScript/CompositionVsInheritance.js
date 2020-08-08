// Inheritance is when you design your types after what they are
// Composition is when you design your types after what they do. 

class Animal {
    constructor(name){
        this.name = name
    }
    poop(){
        console.log("Poop!")
    }
}

class Dog extends Animal {
    bark(){
        console.log("Bark")
    }
}

class Cat extends Animal {
    meow(){
        console.log("Meow")
    }
}

class Robot {
    constructor(id){
        this.id = id
    }
    drive(){
        console.log("Drive")
    }
}

class CleaningRobot extends Robot {
    clean(){
        console.log("Clean")
    }
}

class GuardRobot extends Robot {
    guard(){
        console.log("Guard")
    }
}

// it's hard to create a GuardRobotDog which can extends from GuardRobot but repeat bark function from Dog
class GuardRobotDog extends GuardRobot {
    bark(){
        console.log("Bark")
    }
}
const grd = new GuardRobotDog("X")
grd.drive()
grd.guard()
grd.bark()

// Composition can fix this problem

const drive = (state) => ({
    drive: () => state.position = state.position + state.speed
})
const guard = (state) => ({
    guard: () => console.log("Don't move")
})
const barker = (state) => ({
    bark: () => console.log("Bark, I am "+state.name)
})

const guardRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position:0
    }
    return Object.assign(
        {},
        barker(state),
        drive(state),
        guard(state)
    )
}
guardRobotDog('XX').drive()
guardRobotDog('XX').bark()
guardRobotDog('XX').guard()


// Monster game example: stop using inheritance in JavaScript
console.log("-------------Monster example--------------")
console.log("-------------Class Inheritance--------------")
class Monster {
    constructor(name) {
        this.name = name
    }

    attack() {
        console.log(`${this.name} attacked`)
    }

    walk() {
        console.log(`${this.name} walked`)
    }
}

class FlyingMonster extends Monster {
    fly() {
        console.log(`${this.name} flew`)
    }
}

class SwimmingMonster extends Monster {
    swim() {
        console.log(`${this.name} swam`)
    }
}

const bear = new Monster('bear')
bear.walk()
bear.attack()

const eagle = new FlyingMonster('eagle')
eagle.walk()
eagle.fly()
eagle.attack()

const crocodile = new SwimmingMonster('crocodile')
crocodile.walk()
crocodile.swim()
crocodile.attack()

// no good way to create a Monster can fly and swim without duplication
console.log("-------------Function Composition--------------")
console.log("Inheritance describe what object are")
console.log("Composition describe what object can do")

function walkerAndAttack({name}){
    return {
        walk: () => console.log(`${name} walk`),
        attack: () => console.log(`${name} attack`)
    }
}


function flyer({name}){
    return {
        fly() {
            console.log(`${name} flew`)
        }
    }
}

function swimmer({name}){
    return {
        swim() {
            console.log(`${name} swam`)
        }
    }
}

function swimmingMonsterCreator(name) {
    const monster = {name}

    return {
        ...monster,
        ...walkerAndAttack(monster),
        ...swimmer(monster)
    }
}

function flyingSwimmingMonsterCreator(name) {
    const monster = {name}

    return {
        ...monster,
        ...walkerAndAttack(monster),
        ...swimmer(monster),
        ...flyer(monster)
    }
}

const obj = flyingSwimmingMonsterCreator("X-Monster")
obj.attack()
obj.walk()
obj.fly()
obj.swim()