import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type:String,
        required:true
    },
    isPublic:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Story = mongoose.model('Story',storySchema);
export default Story;
