const form = document.getElementById('user-input')

function signupHandler(event){
    event.preventDefault()

    const usernameInput = document.getElementById('username')
    const entredUsername = usernameInput.value

    const passwordInput = document.getElementById('password')
    const entredPassword = passwordInput.value

    if(entredUsername.trim().length === 0 || entredPassword.trim().length <= 5){
        alert('Invalid input - username must not be empty and password must be six characters or longer')
        return;
    }

    const user = {
        username: entredUsername,
        password: entredPassword
    }

    console.log(user)
    console.log(`Hi, I am ${user.username}`)
}

form.addEventListener('submit',signupHandler)
