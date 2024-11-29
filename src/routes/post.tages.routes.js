import { Hono } from 'hono'

import { authGuard, validateSchema } from '../middleware/index.js'
import { postTagSchema,} from '../validations/index.js'
import {
    createPostTagsController,
    deletePostTagsController,
    getAllPostTagsController,
    getByIdPostTagsController,
} from '../controllers/index.js'

export const postTagesRouter = new Hono()

postTagesRouter.get('/all', authGuard, getAllPostTagsController)
postTagesRouter.get('/:id', authGuard, getByIdPostTagsController)
postTagesRouter.post(
    '/create',
    authGuard,
    validateSchema(postTagSchema),
    createPostTagsController,
)
postTagesRouter.delete('/delete/:id', authGuard, deletePostTagsController)
