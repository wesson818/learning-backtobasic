// Single responsibility is the most important rule of SOLID. 
// This is because it is easy to implement and test for while still being incredibly useful in terms of making your code cleaner.

// The main idea of the single responsibility principle is that 
// every class/function/module/section of your code should have only one responsibility. 
// This means that the code should only have one single reason to change. 
// If there are two different reasons for the code to change, or 
// if it does two distinctly different things then it is in violation of this principle and is potentially poorly designed code.

console.log('*** the code should only have one single reason to change ***')

class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    // this function broke the single responsibility principle
    trackCalories(calorieCount) {
        this.currentCalories += calorieCount
        if(this.currentCalories > this.maxCalories) {
            // this.logCalories()
            logMessage('Max calories exceeded')
        }
    }

    // logCalories() {
    //     console.log('Max calories exceeded')
    // }
}

// create new function to deal with log message, so now it only one reason to change CalorieTracker, which is the way to track
function logMessage(message) {
    console.log(message)
    // email to user
}

const calorieTracker = new CalorieTracker(2000)
calorieTracker.trackCalories(500)
calorieTracker.trackCalories(700)
calorieTracker.trackCalories(801)