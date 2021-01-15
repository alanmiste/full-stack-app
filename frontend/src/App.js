import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function App() {
  const [name, setname] = useState("")
  const [todos, settodos] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/todos")
    .then(res => res.json())
    .then(res =>    { 
      settodos(res)
      console.log(res)
    })
  },[])
  const [users, setusers] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/users")
    .then(res => res.json())
    .then(res =>    { 
      setusers(res)
      console.log(res)
    })
  },[])
  console.log(name);
  return (
    <div className="App">
      <header className="App-header">
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
        onChange={(event)=> {
          setname(event.target.value)
        }}
        />
        <button>Submit</button>
        {todos.map(todo=>(
          <div>
            {todo.title}
          </div>
        ))}
        {users.map(user=>(
          <div>
            {user.name}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
