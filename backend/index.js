const express = require('express')
var cors = require('cors')// this library allowes localhost:3000 connections
const app = express()
app.use(cors())  //tell our app to use the library
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

app.get('/', function (req, res) { //insecure from 3000 - because im on 4000
    console.log("This is a server request", Date.now());
    res.json(todos);
})

app.listen(4000)