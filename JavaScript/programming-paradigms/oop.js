
// Pros: The basic concept of artifacts can be easily understood and the meaning of method calls can be easily interpreted.
// OOP perfers to use an imperative style rather than a declarative style that reads for the machine to follow as a simple set of instructions

// Cons: OOP is usually mutual state based. Usually, entites and actions are handled together on the same subject, 
// which can be arbitranily accessed by any number of non-deterministic functions, which can lead to undesirable behaviurs such as race conditions

class Validator {
    static REQUIRED = 'REQUIRED'
    static MIN_LENGTH = 'MIN_LENGTH'

    static validate(value, flag, validatorValue){
        if(flag === this.REQUIRED){
            return value.trim().length > 0
        }
        if(flag === this.MIN_LENGTH){
            return value.trim().length > validatorValue
        }

    }
}

class User {
    constructor(uName,uPassword){
        this.userName = uName
        this.userPassword = uPassword
    }
    greeting(){
        console.log('Hi, I am '+this.userName)
    }
}

class UserInputForm {
    constructor(){
        this.form = document.getElementById('user-input')
        this.usernameInput = document.getElementById('username')
        this.passwordInput = document.getElementById('password')

        this.form.addEventListener('submit',this.signupHandler.bind(this))
    }

    signupHandler(event) {
        event.preventDefault()
        const entredUsername = this.usernameInput.value
        const entredPassword = this.passwordInput.value

        if(
            !Validator.validate(entredUsername,Validator.REQUIRED) || 
            !Validator.validate(entredPassword,Validator.MIN_LENGTH,5)
        ){
            alert('Invalid input - username must not be empty and password must be six characters or longer')
            return;
        }

        const newUser = new User(entredUsername,entredPassword)
        console.log(newUser)
        newUser.greeting()
    }
}

new UserInputForm()
