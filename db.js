import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB= async() =>{
    try{
        const conn = await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });

        console.log('connected to database');
    } catch(error){
        console.error('error connected db:', error.message);
    }
};

export default connectDB;