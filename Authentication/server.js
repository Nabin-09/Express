import express from 'express'
import dotenv from 'dotenv'
import { connectToDb } from './database/db.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    connectToDb();
    console.log(`Server is now running at ${PORT}`)
})