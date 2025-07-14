import PostModel from '../models/postModel.js';

// get all posts
export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.json(posts);
    } catch (error) {
        console.error('getPosts error:', error);
        res.status(500).json({ message: 'Error getting posts'});
    }
}
