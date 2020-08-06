// lexical / static scoping means the scope and value of a variable is determined from where it is defined. It doesn’t change.

var number2 = 2;

function addNumbers(number1) {
    console.log(number1 + number2);
}

function addNumbersGenerate() {
    var number2 = 10;
    addNumbers(number2);
}

addNumbersGenerate(); //12

// Closure is created when an (inner function has access to its outer function variables and arguments). The inner function has access to –
// 1. Its own variables.
// 2. Outer function's variables and arguments.
// 3. Global variables.

// Inner functions can access its parent scope, even after the parent function is already executed.

// The closure stores the reference, not the value. 

// example1:
console.log("example1:")
function greetCustomer() {
    const customerName = "Peter";

    function greetingMsg() {
        console.log("Hi! " + customerName);
    }
    return greetingMsg;
}

const callGreetCustomer = greetCustomer();
callGreetCustomer(); // output – Hi! Peter
greetCustomer(); // no output
console.dir(callGreetCustomer);

// example2:
console.log("counter example:")
function counter() {
    let count = 0;
    return function () {
        return count++;
    };
}

const countValue1 = counter();
const countValue2 = counter();
countValue1(); // 0
countValue1(); // 1
console.log(countValue1()); // 2
countValue2(); // 0
console.log(countValue2()); // 1

// example3:
console.log("example3:")
function addNumber(number1) {
    return function (number2) {
        return number1 + number2;
    }

}
const addNumberCall = addNumber(7);
console.log(addNumberCall(8)) // 15
console.log(addNumberCall(6)) // 13

// countTheNumber
console.log("countTheNumber:")
function countTheNumber() {
    var arrToStore = [];
    for (var x = 0; x < 9; x++) {
        arrToStore[x] = function () {
            return x;
        };
    }
    return arrToStore;
}

const callInnerFunctions1 = countTheNumber();
console.log(callInnerFunctions1[0]()) // 9
console.log(callInnerFunctions1[1]()) // 9

// separate scope for each iteration
console.log("callTheNumber:")
function callTheNumber() {
    function getAllNumbers(number) {
        return function () {
            return number;
        };
    }
    var arrToStore = [];
    for (var x = 0; x < 9; x++) {
        arrToStore[x] = getAllNumbers(x);
    }
    return arrToStore;
}

const callInnerFunctions2 = callTheNumber();
console.log(callInnerFunctions2[0]()); // 0
console.log(callInnerFunctions2[1]()); // 1