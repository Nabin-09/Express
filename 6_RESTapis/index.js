const express = require('express')
const users = require("./MOCK_DATA.json")

const app = express();

const PORT = 3000

//routes 
app.get('/api/users' , (req , res)=>{
    return res.json(users);
})

app.get('/users' , (req , res)=>{
    const html = `
    <ul>
        ${users.map((user)=>
        `<li>${user.first_name}</li>`)}
    </ul>
    `
    res.send(html);
})


app.get("/api/users/:id" , (req , res)=>{
    const id  = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user)
})


//POST

app.post('/api/users' , (req , res)=>{
    //TODO : Create a new user 
    return res.json({status : "Pending"})
})

app.patch('/api/users/:id' , (req , res)=>{
    //Update a user
    return res.json({status : "Pending"})
})


app.delete('/api/users/:id' , (req , res)=>{
    //Delete a user
    return res.json({status : "Pending"})
})

/*
When we have common routes we can also do 
app.route('/api/users/:id)
    .get((req , res)=>{
        })
    .post((req , res)=>{
        })
    .delete((req , res)=>{
        })
*/

app.listen(PORT , ()=>{
    console.log(`Server running in ${PORT}`);
})