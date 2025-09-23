import express from 'express';
import {setStory, getStories, myStories} from '../controllers/storyController.js';

const router = express.Router();


router.post('/newstory',setStory);
router.get('/getstories',getStories)
router.get('/mystories',myStories)






export default router;