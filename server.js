import express from 'express'
const app = express();
import cors from 'cors'
import connectDB from './db.js';
import Story from './models/story.js'

app.use(cors());
app.use(express.json());

connectDB();


app.get('/api',(req,res)=>{
    res.send("api working");
})

app.post('/api/story',(req,res)=>{
    const {title,content} = req.body;
    const newStory = new Story({title,content});
    newStory.save();
    console.log({title,content});
    res.status(200).json({recieved: true, data: newStory});
})

app.get('/api/getstories', async (req,res)=>{

    const stories = await Story.find();
    res.status(200).json(stories);
})


app.listen(3000,()=>{
    console.log('server started');
})


