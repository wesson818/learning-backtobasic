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