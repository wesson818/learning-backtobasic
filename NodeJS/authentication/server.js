const express = require("express")
const bcrypt = require("bcrypt")
const { v4: uuid4 } = require("uuid")
const app = express()

app.use(express.json())

const users = []

app.get('/users',(req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { id: uuid4(), name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send("user added")
    } catch {
        res.status(500).send("something wrong")
    }
})


app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if(user == null) {
        return res.status(400).send("Cannot find user")
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send("Success")
        }
        else{
            res.send("Not allowed")
        }
    } catch {
        res.status(500).send("something wrong")
    }
})


app.listen(3030)