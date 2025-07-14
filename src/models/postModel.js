import mongoose, { Schema } from 'mongoose';

// define schema
const PostSchema = new Schema({
    id: String,
    title: String,
    body: String,
    tags: [String],
});

// create model & export
const PostModel = mongoose.model('Post', PostSchema);
export default PostModel;
