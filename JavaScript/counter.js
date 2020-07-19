// What is a Closure? 
// A closure is a function having access to the parent scope, even after the parent function has closed.
// A closure gives you access to an outer function’s scope from an inner function.

const counter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    }
  };
  
  const counter1 = counter();
  const counter2 = counter();
  
  console.log(counter1.value());  // 0.
  
  counter1.increment();
  counter1.increment();
  console.log(counter1.value()); // 2.
  
  counter1.decrement();
  console.log(counter1.value()); // 1.
  console.log(counter2.value()); // 0.