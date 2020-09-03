const fetch = require("node-fetch");
const axios = require("axios");
// incredibly useful it is when refactoring code. 
// The idea of the facade pattern is to create your own API that hides away complex or 
// repetitive code so that you are left with a clean and easy to use API. 
// The benefits of this is not only clean code that is easy and fun to work with, 
// but your code is also much easier to refactor when the complex code behind your facade needs to change.

// before
function getUsers() {
    // return fetch('https://jsonplaceholder.typicode.com/users', {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then(res => res.json())

    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId) {
    // return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then(res => res.json())

    return getFetch('https://jsonplaceholder.typicode.com/posts', {
        userId: userId
    })

}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})

// after
// function getFetch(url, params={}) {
//     const queryString = Object.entries(params).map(param => {
//         return `${param[0]} = ${param[1]}`
//     }).join('&')
//     // console.log(queryString)
//     return fetch(`${url}?${queryString}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(res =>  res.json())
// }

// axios
function getFetch(url, params={}) {
    return axios({
        url: url,
        method: "GET",
        params: params
    }).then(res => {
        console.log(res.data)
        return res.data
    })
}