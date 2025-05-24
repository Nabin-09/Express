import express from 'express';
const app = express();

//Best Practice for ports
const PORT = process.env.PORT || 3000;
app.get('/' , (request , response)=>{
    response.status(201).send({msg : "Nabin is gay"})
})
app.get('/api/users' , (request , response)=>{
    response.send([
        {id : 1 , username : "NabinYou" , displayName : "Rizzler" },
        {id : 2 , username : "NitinYou" , displayName : "Gay" },
        {id : 3 , username : "RishuYou" , displayName : "Hizru" },
    ])
})

app.get('/api/products' , (request , response)=>{
    response.send([
        {id : 123 , name : "Vada Pav" , price : 10}
    ])
})

app.listen(PORT , ()=>{
    console.log(`Running on ${PORT}`)
})
