const express = require('express')
require('dotenv').config()
const { connectToMongoDB } = require("./connect")
const urlRoute = require('./routes/url')
const path = require('path')
const URL = require('./models/url')

const app = express();

app.use(express.json())
app.set('view engine', 'ejs');
app.set('views' , path.resolve('./views'))

app.get('/test',async (req , res)=>{
    const allUrls = await URL.find({});
    return res.render('home',{
        urls : allUrls,
    });
})



app.use("/url" , urlRoute);
connectToMongoDB(process.env.MONGO_URI).then(()=>{
    console.log(`DB connected`)
})

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