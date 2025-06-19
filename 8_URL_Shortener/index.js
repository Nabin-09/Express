const express = require('express')
require('dotenv').config()
const { connectToMongoDB } = require("./connect")
const urlRoute = require('./routes/url')
const URL = require('./models/url')

const app = express();

app.use(express.json())



app.use("/url" , urlRoute);
connectToMongoDB(process.env.MONGO_URI).then(()=>{
    console.log(`DB connected`)
})

app.get('./:shortId', async (req , res)=>{
     const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push : {
                visitHistory: {
                    timestamp : Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL)
})


app.listen(process.env.PORT , ()=>{
    console.log(`Server running at port ${process.env.PORT} `)
})