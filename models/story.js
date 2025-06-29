const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Story = mongoose.model('Story',storySchema);

module.exports = Story;