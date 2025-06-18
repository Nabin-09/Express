const express = require('express')
const { connectToMongoDB } = require("./connect")
const urlRoute = require('./routes/url')

const app = express();

const PORT = 8001
app.use("/url" , urlRoute);
connectToMongoDB()

app.listen(PORT , ()=>{
    console.log(`Server running at ${PORT}`)
})