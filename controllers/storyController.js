import Story from '../models/story.js';

export const setStory = (req,res)=>{
    const {title,content,isPublic} = req.body;
    const newStory = new Story({title,content,isPublic});
    newStory.save();
    console.log({title,content,isPublic});
    res.status(200).json({recieved: true, data: newStory});
}


export const getStories = async (req,res)=>{
    const stories = await Story.find({isPublic:true});
    res.status(200).json(stories);
}

export const myStories = async(req,res)=>{
    const myStories = await Story.find({usename:username});
    res.status(200).json(myStories)
}