// class object and class inheritance: sub class extends class 

const PersonC = class {
    constructor(name, id){
        this.name = name
        this.id = id
    }
    getDetails(){
        return `${this.name}:${this.id}`
    }
}

const john = new PersonC("John",111)
console.log(john.getDetails(),john.name)

// EmployeeC prototype links to PersonC prototype
const EmployeeC = class extends PersonC {
    constructor(name, id, salary){
        super(name, id)
        this.salary = salary
    }
    employeeInfo(){
        return `${this.name}:${this.id}:${this.salary}`
    }
}

const peter = new EmployeeC("Peter",222,100000)
console.log(peter.employeeInfo())

// ======================================================================== //

// object with prototype and inheritance: instance derive from other objects directly
const PersonP = function(name, id){
    this.name = name;
    this.id = id;
}
PersonP.prototype.getDetails = function(){
    return `${this.name}:${this.id}`
}

const smith = new PersonP("Smith", 333)
console.log(smith.getDetails(), smith.name)

const EmployeeP = function(name, id, salary){
    PersonP.call(this, name, id)
    this.salary = salary
}
Object.setPrototypeOf(EmployeeP, PersonP.prototype) // like extends in class
EmployeeP.prototype.employeeInfo = function(){
    return `${this.name}:${this.id}:${this.salary}`
}

const mark = new EmployeeP("Mark", 444, 140000)
console.log(mark.employeeInfo())

//Object prototype
const PersonO = {
    init: function(name, id){
        this.name = name;
        this.id = id;
    },
    getDetails(){
        return `${this.name}:${this.id}`
    }
}
const wen = Object.create(PersonO)

wen.init("Wen", 555)
console.log(wen.getDetails(), wen.name)