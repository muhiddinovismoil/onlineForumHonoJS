import { Hono } from 'hono'

import { authGuard, validateSchema } from '../middleware/index.js'
import { commentSchema } from '../validations/index.js'
import {
    createCommentsController,
    deleteCommentsController,
    getAllCommentsController,
    getByIdCommentsController,
    updateCommentsController,
} from '../controllers/index.js'

export const commentRouter = new Hono()

commentRouter.get('/all', authGuard, getAllCommentsController)
commentRouter.get('/:id', authGuard, getByIdCommentsController)
commentRouter.post(
    '/create',
    authGuard,
    validateSchema(commentSchema),
    createCommentsController,
)
commentRouter.put('/update/:id', authGuard, updateCommentsController)
commentRouter.delete('/delete/:id', authGuard, deleteCommentsController)
