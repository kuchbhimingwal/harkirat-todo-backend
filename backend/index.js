/// write basic express boilerplate code
// with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db/db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())


app.post("/todo", async (req, res)=>{
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg: "you sent the wrong inputs"
    })
    return;
  }
  // put in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })

  res.json({
    msg: "todo created"
  })
})

app.get("/todos", async (req, res)=>{
  const todoList = await todo.find({});
  res.json({
    todoList
  })
})

app.put("/completed", async (req, res)=>{
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload.success){
    res.status(411).json({
      msg: "wrong in put"
    })
    return;
  }
  await todo.updateOne({
    _id: req.body.id
  }, {
    completed: true
  })

  res.json({
    msg: "updated successfully"
  })
  // mark as complete in mongon db
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});