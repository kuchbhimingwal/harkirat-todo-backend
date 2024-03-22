import React from 'react'

function Todos({todos}) {
  return (
    <div>
      {todos.map((todo)=>(
        <div>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>

          <button key={todo._id} onClick={()=>{
            fetch('http://localhost:3000/todo')
          }}>{todo.completed == true ? "completed" : "mark as completed"}</button>
        </div>
      ))}
    </div>
  )
}

export default Todos