import fetch from "node-fetch"

// get
fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log("GET:",data))

// post
fetch('https://jsonplaceholder.typicode.com/comments',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        postId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log("POST:",data))


// fetch & async & await
const apiUrl = "https://api.chucknorris.io/jokes/random";
async function getRandomJoke(){
    const response = await fetch(apiUrl)
    const data = await response.json()
    // return data.value // doesn't work
    console.log("Joke:",data.value)
}
getRandomJoke()
