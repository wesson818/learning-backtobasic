var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var example1 = 35;
example1 = true;
var arrayExample = [1, 3, 4, 5];
var example2 = arrayExample.reduce(function (num1, num2) { return num1 + num2; });
var example3 = 'Hello world';
example3 = "Here is a example " + example1 + "\n with multiple lines";
var example4 = undefined;
var example5 = null;
var arrayExample1 = [1, 3, 4, 5];
// same with arrayExample1
var arrayExample2 = [1, 3, 4, 5];
var example6 = ['Hello World'];
var example7 = [1, 2, true];
var example8 = [[true, false]];
// tuple must be erectly match
var exampleTuple = ['https://www.YouTube.com/CodingTutorials360', 30];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// unknown type
var myVar = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVar)) {
    console.log(myVar.name);
}
// (myVar as string).toUpperCase();
var Bear = /** @class */ (function () {
    function Bear(data) {
        this.claws = data;
    }
    return Bear;
}());
var bear = new Bear(3);
if (bear instanceof Bear) {
    console.log("Hello from TypeScript");
}
var Age;
(function (Age) {
    Age[Age["mine"] = 35] = "mine";
    Age[Age["mother"] = 59] = "mother";
})(Age || (Age = {}));
// ? is option value
function totalAge(age1, age2) {
    if (age2) {
        return age1 + age2;
    }
    else {
        return age1;
    }
}
totalAge(Age.mine, Age.mother);
totalAge(35, 50);
totalAge(35);
function sayHello(person) {
    return "Say Hello to My Little Friend, " + person.firstName + "!";
}
var p = {
    firstName: "Wen",
    lastName: "Z"
};
sayHello(p);
var Employee = /** @class */ (function () {
    function Employee(data) {
        this.firstName = data.firstName || 'Wen';
        this.lastName = data.lastName || 'Z';
        this.middleName = data.middleName;
    }
    Employee.prototype.greet = function () {
        console.log("Hey " + this.firstName);
    };
    return Employee;
}());
var emp = new Employee({ firstName: 'Wenjing' });
sayHello(emp);
emp.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m = new Manager('Wesson');
m.delegateWork();
m.greet();
console.log(m.firstName);
