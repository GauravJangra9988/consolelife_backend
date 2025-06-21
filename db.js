const mongoose = require('mongoose');

MONGO_URI = process.env.MONGO_URI;

const connectDB= async() =>{
    try{
        const conn = await mongoose.connect(MONDO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });

        console.log('connected to database');
    } catch(error){
        console.error('error connected db:', error.message);
    }
};

module.exports = connectDB;