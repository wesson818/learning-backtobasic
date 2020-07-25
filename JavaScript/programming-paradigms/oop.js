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
