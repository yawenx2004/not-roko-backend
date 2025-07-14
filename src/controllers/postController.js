import PostModel from '../models/postModel.js';

// get all posts
export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error getting posts'});
    }
}

// create post
export const createPost = async (req, res) => {
    try {
        const newPost = new PostModel(req.body);
        await newPost.save();
        res.json(newPost);
    } catch (error) {
        res.status(400).json({ message: 'Error creating post'});
    }
}

// delete post
export const deletePost = async (req, res) => {
 try {
    const { id } = req.params;
    const deletedPost = await PostModel.findByIdAndDelete(id);

    if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
    }

    res.json(deletedPost);
 } catch (error) {
        res.status(500).json({ message: 'Error deleting post'});
 }
}
