const mongoose = require('mongoose');

const connectDB= async() =>{
    try{
        const conn = await mongoose.connect('mongodb+srv://gaurav:gaurav@cluster0.bsemssd.mongodb.net/consoleloglife?retryWrites=true&w=majority&appName=Cluster0',{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });

        console.log('connected to database');
    } catch(error){
        console.error('error connected db:', error.message);
    }
};

module.exports = connectDB;