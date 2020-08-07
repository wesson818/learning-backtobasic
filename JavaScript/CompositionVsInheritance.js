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
