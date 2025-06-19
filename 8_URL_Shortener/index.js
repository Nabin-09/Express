const express = require('express')
require('dotenv').config()
const { connectToMongoDB } = require("./connect")
const urlRoute = require('./routes/url')
const path = require('path')
const URL = require('./models/url')
const staticRouter = require('./routes/staticRouter')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');
app.set('views' , path.resolve('./views'))




app.use("/url" , urlRoute);
connectToMongoDB(process.env.MONGO_URI).then(()=>{
    console.log(`DB connected`)
})

app.use('/' , staticRouter)

app.get('/url/:shortId', async (req , res)=>{
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