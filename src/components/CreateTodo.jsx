import React, { useState } from 'react'

function CreateTodo() {
  const [title, setTitle] = useState("")
  const [description, setdescription] = useState("")
  const clickHandler = () =>{
    fetch('http://localhost:3000/todo',{
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description
      }),
      headers: {
        "content-type": "application/json"
      }
    })
    .then(async(res)=>{
      const json = await res.json();
      console.log(json);
    })
  }
  return (
    <div>
      <input type="text" placeholder='title'
        onChange={(e)=>{
          const value = e.target.value;
          setTitle(value);
        }}/><br/>
      <input type="text" placeholder='description'
        onChange={(e)=>{
          const value = e.target.value;
          setdescription(value);
        }}/><br/>

      <button onClick={clickHandler}>Add a todo</button>
    </div>
  )
}

export default CreateTodo