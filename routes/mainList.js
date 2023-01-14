const express = require('express')
const toDoRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const toDoList = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        // _id: uuidv4()
        _id: "2"
    },
]

//get all 
toDoRouter.get("/", (req, res) => {
    res.send(toDoList)
})

//get one 
toDoRouter.get("/:todoId", (req, res) => {
    const id = req.params.todoId
    const findTodo = toDoList.find(todo => todo._id === id)
    res.send(findTodo)
})

//post
toDoRouter.post("/", (req, res) => {
    const newToDo = req.body
    newToDo._id = uuidv4()
    toDoList.push(newToDo)
    res.send("new todo posted")
})

//put 
toDoRouter.put("/:todoId", (req, res) => {
    const id = req.params.todoId
    const todoIndex = toDoList.findIndex(todo => todo._id === id)
    const updatedTodo = Object.assign(toDoList[todoIndex], req.body)
    res.send(updatedTodo)
})

//delete
// toDoRouter.delete("/:todoId", (req, res) => {
//     const id = req.params.todoId
//     const todoIndex = toDoList.findIndex(todo => todo._id === id)
//     toDoList.splice(todoIndex, 1)
//     res.send("to do is gone")
// })

module.exports = toDoRouter
