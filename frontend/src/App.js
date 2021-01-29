import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [name, setname] = useState("")
  const [todos, settodos] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then(res => res.json())
      .then(res => {
        settodos(res)
        console.log(res)
      })
  }, [])
  const [users, setusers] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(res => {
        setusers(res)
        console.log(res)
      })
  }, [])
  console.log(name);
  return (
    <div className="App">
      <header className="App-header">

        {/* TODO Make a input for a coordinate data type. Latitute and longitude. 13.023123123, 52.232321321 */}
        {/* TODO Send this two numbers or as one string (as you want) to a new endpoint on the server */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          id="searchuser"
          placeholder="Create user with name"
          // controlled component needs a controlled value from getter
          value={name}
          // controlled component needs a setter
          onChange={(event) => {
            setname(event.target.value) // set the state variable to the current input value
          }}
        />
        <button
          onClick={(event) => { // react evetn  handler for click
            fetch('http://localhost:4000/todos', {
              method: 'post', // defining the fetch request as a POST request
              body: JSON.stringify({"title": name}),// THE PAYLOAD / DATA / New Todo you send to the server as POST request
              headers: {
                "content-type": "application/json" // required for that the post request is accepted in the backend as JSON request. So you can access the req.body and its not empty.
              }
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log('Created Gist:', data);
              settodos(data)
            });
          }}
        >Submit</button>
        {todos.map(todo => (
          <div>
            {todo.title}
          </div>
        ))}
        {users.map(user => (
          <div>
            {user.name}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
