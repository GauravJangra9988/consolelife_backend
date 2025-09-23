import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db.js';
import userRoute from './routes/userRoute.js'
import storyRoute from './routes/storyRoute.js'

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

connectDB();


app.get('/api',(req,res)=>{
    res.send("api working");
})

app.use('/api/user',userRoute)
app.use('/api/story',storyRoute)


const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('server started', PORT);
})


