const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');
const Story = require('./models/story');

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

PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('server started');
})


