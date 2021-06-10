// pure function
// avoid side effects

// Pros: prevent any common state or side effects using the functional model, removing errors caused by multiple functions vying for the same resources.
// Through features such as point-free style flexibility, funcitons appear to be drastically simplified and easily recomposed compared to OOP for more commonly reusable software.
// Cons: FP has a much steeper learning curve than OOP

const REQUIRED = 'REQUIRED'
const MIN_LENGTH = 'MIN_LENGTH'

function validate(value, flag, validatorValue){
    if(flag === REQUIRED){
        return value.trim().length > 0
    }   
    if(flag === MIN_LENGTH){
        return value.trim().length > validatorValue
    }
}

function getUserInput(inputId){
    return document.getElementById(inputId).value
}

function createUser(uName,uPassword){
    if(!validate(uName,REQUIRED) || !validate(uPassword,MIN_LENGTH, 5)){
        throw new Error ('Invalid input - username must not be empty and password must be six characters or longer')
    }
    return {
        username: uName,
        password: uPassword
    }
}

function greeting (newUser){
    console.log(newUser)
    console.log('Hi, I am '+newUser.username)
}

function signupHandler(even){
    event.preventDefault()

    const entredUsername = getUserInput('username')
    const entredPassword = getUserInput('password')
    try{
        const newUser = createUser(entredUsername,entredPassword)
        greeting(newUser)
    }catch(err){
        alert(err.message)
    }
}

function connectForm(formId, formSubmitHandler){
    const form = document.getElementById(formId)
    form.addEventListener('submit', formSubmitHandler)
}

connectForm('user-input',signupHandler)