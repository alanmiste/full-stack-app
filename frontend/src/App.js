import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function App() {
  const [todos, settodos] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/")
    .then(res => res.json())
    .then(res =>    { 
      settodos(res)
      console.log(res)
    })
  },[])
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
        {todos.map(todo=>(
          <div>
            {todo.title}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
