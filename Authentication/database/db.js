import mongoose  from "mongoose";

export const connectToDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected successfully`)
    }catch(e){
        console.log(`Could not connect to MongoDB ${e}`)
        process.exit(1);
    }
}

