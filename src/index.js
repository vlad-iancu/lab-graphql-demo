import express from 'express'

let app = express()

app.get("/", (req, res) => {
    res.send("hi")
})

app.get("/hello/:person?", (req, res) => {
    if(req.params.person)
    {
        res.send(`Hello person ${req.params.person}`)
    }
})

app.listen(5001, () => {
    console.log("Server started on port 5001")
})
