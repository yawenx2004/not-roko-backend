import { Router } from 'express';
import * as Posts from '../controllers/postController.js';

const PostRouter = Router();

PostRouter.get('/', Posts.getPosts);
PostRouter.delete('/:id', Posts.deletePost);

export default PostRouter;
