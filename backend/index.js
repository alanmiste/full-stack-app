const express = require('express')
const app = express()
const todos = [{
    title: "Buy milk",
    completed: false,
    id: 1
}, {
    title: "Buy bread",
    completed: false,
    id: 2
}, {
    title: "Buy tires",
    completed: false,
    id: 3
}, {
    title: "make taxes",
    completed: false,
    id: 4
}]

app.get('/', function (req, res) {
    console.log("This is a server request", Date.now());
    res.json(todos);
})

app.listen(4000)