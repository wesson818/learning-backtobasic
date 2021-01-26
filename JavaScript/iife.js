// Immediately Invoked Function Expression (IIFE)
// IIFE is a function expression that automatically invokes after completion of the definition. 
// Advantages of IIFE:
// - Do not create unnecessary global variables and functions
// - Functions and variables defined in IIFE do not conflict with other functions & variables even if they have same name.
// - Organize JavaScript code.
// - Make JavaScript code maintainable.

var userName = "Bill";

(function (name) {

    function display(name)
    {
        console.log("MyScript2.js: " + name);
    }

    display(name);
})(userName);

// ESM is the best module format thanks to its simple syntax, async nature, and tree-shakeability.
// UMD works everywhere and usually used as a fallback in case ESM does not work
// CJS is synchronous and good for back end.
// AMD is asynchronous and good for front end.