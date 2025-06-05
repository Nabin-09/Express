import express from 'express';

const app = express();
app.use(express.json());

const loggingMiddleware = (request  , response , next)=>{
    console.log(`${request.method} - ${request.url}`);
    next();
}

app.use(loggingMiddleware);




//Best Practice for ports

const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {

    response.status(201).send({ msg: "Nabin is Batman" })

})

app.get('/api/users', (request, response) => {

    response.send([
        { id: 1, username: "NabinYou", displayName: "Rizzler" },
        { id: 2, username: "NitinYou", displayName: "hay" },
        { id: 3, username: "RishuYou", displayName: "Hizru" }])

})



app.post('/api/users', (request, response) => {

    console.log(request);

    return response / send(200);

})



app.get('/api/products', (request, response) => {
    response.send([
        { id: 123, name: "Vada Pav", price: 10 }
    ])
})



app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})