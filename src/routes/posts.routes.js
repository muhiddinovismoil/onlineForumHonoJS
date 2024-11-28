import { Hono } from 'hono'
import {
    getAllPostsCon,
    getPostByIdCon,
    createPostCon,
    updatePostCon,
    deletePostCon,
} from '../controllers/index.js'
import { validateSchema, authGuard } from '../middleware/index.js'
import { postsScheme } from '../validations/index.js'
export const postsRouter = new Hono()
postsRouter.get('/', authGuard, getAllPostsCon)
postsRouter.get('/:id', authGuard, getPostByIdCon)
postsRouter.post('/', authGuard, validateSchema(postsScheme), createPostCon)
postsRouter.put('/:id', authGuard, updatePostCon)
postsRouter.delete('/:id', authGuard, deletePostCon)
