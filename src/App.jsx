import { useEffect, useState } from "react"
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/todos')
    .then(async(todo)=>{
      const json = await todo.json();
      setTodos(json.todoList);
    })
  },[])

  return (
    <div>
    <CreateTodo />
    <Todos todos={ todos }/>
    </div>
  )
}

export default App
