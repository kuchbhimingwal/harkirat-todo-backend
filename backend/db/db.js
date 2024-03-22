/*
 todo{
  title: string,
  description: string,
  completed: boolean
 }
*/
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:Shubham%4028@cluster0.yzcu80x.mongodb.net/todoDb')
const schema = mongoose.Schema;

const todoSchema = new schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
  todo
}