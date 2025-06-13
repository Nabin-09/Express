import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    }
})