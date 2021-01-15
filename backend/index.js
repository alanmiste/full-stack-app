const express = require('express')
var cors = require('cors')// this library allowes localhost:3000 connections
var bodyParser = require('body-parser') // to acceess POST requests body - we need to parse it first 
const app = express()

// support parsing of application/json type post data
app.use(bodyParser.json()); // Tell the bodyparser to use json

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

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
const users = [
    { id: 1, name: "Alan" },
    { id: 2, name: "Tommy" }
]

app.get('/', function (req, res) { //insecure from 3000 - because im on 4000
    console.log("Hello World", Date.now());
    res.json({ message: "Hello World" });
})


// seperate GET routes
app.get('/users', function (req, res) { //insecure from 3000 - because im on 4000
    console.log("This is a users request", Date.now());
    res.json(users);
})
// seperate GET routes
app.get('/search/:name', function (req, res) { //insecure from 3000 - because im on 4000
    console.log("This is a users request", Date.now());
    console.log(req.params.name);
    const filteredUsers = users.filter((user) => (user.name.toLowerCase() === req.params.name.toLowerCase()))
    if (filteredUsers.length === 0) {
        res.status('404')
    }
    res.json(filteredUsers);
})

//GET SINGLE USER
// curl http://localhost:4000/users/1    1 is the req.params.id
app.get('/users/:id', function (req, res) { // :id is resulting in req.params.id for 
    console.log("This is a users request", Date.now());
    // read id from parameter 
    // just send back that one todo
    const whichUser = req.params.id
    res.json(users[whichUser]);
})

//GET ALL TODOS
// curl http://localhost:4000/todos
app.get('/todos', function (req, res) { //insecure from 3000 - because im on 4000
    console.log("This is a todos request", Date.now());
    // read id from query parameter send in the request
    // just send back that one todo
    res.json(todos);
})

//GET SINGLE TODO
// curl http://localhost:4000/todos/3    4 is the req.params.id
app.get('/todos/:id', function (req, res) { // :id is resulting in req.params.id for 
    console.log("This is a todos request", Date.now());
    // read id from parameter 
    // just send back that one todo
    const whichTodo = req.params.id
    res.json(todos[whichTodo]);
})

app.post('/todos', function (req, res) { // POST endpoint for creating new todos
    console.log(req.body) // POST requests can have a body - with req.body you can get the body
    res.send('Got a POST request') // finising the response with a message
})


console.log("Server listening on 4000...")
app.listen(4000) // finally kick off the server