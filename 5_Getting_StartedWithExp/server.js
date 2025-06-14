const express = require('express')
const http = require('http')

const app = express();

app.get('/' , (req, res)=>{
    return res.send('Hello from home page')
})
app.get('/about' , (req , res)=>{
    return res.send('Hello from ABOOOUT page')
})

const myServer = http.createServer(app)
myServer.listen(3000,()=>{
    console.log('Server running at 3000');
})  