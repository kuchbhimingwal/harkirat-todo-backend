/// write basic express boilerplate code
// with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json())


app.post("/todo", (req, res)=>{
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg: "you sent the wrong inputs"
    })
    return;
  }
  // put in mongodb
})

app.get("/todos", (req, res)=>{

})

app.put("/completed", (req, res)=>{
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg: "wrong in put"
    })
    return;
  }
  // mark as complete in mongon db
})