const express = require('express')
const app = express()
const port = 3004

app.use(express.json())

app.use("/todoList", require("./routes/mainList"))

app.listen(port, () => {
    console.log("server is on")
})
