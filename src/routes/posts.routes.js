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
postsRouter.get('/', getAllPostsCon)
postsRouter.get('/:id', getPostByIdCon)
postsRouter.post('/', createPostCon)
postsRouter.put('/:id', updatePostCon)
postsRouter.delete('/:id', deletePostCon)
