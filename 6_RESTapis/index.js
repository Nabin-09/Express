const express = require('express')
const users = require("./MOCK_DATA.json")
const fs = require('fs');
const { json } = require('stream/consumers');

const app = express();

const PORT = 3000
//Middleware
app.use(express.urlencoded({extended:false}))

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
    const body = req.body;
    console.log("Body" , body);
    users.push({...body , id : users.length+1}); 
    fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (err , data)=>{
        return res.json({status : "pending"})
    })
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