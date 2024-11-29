import { Hono } from 'hono'
import {
    createTagsController,
    deleteTagsController,
    getAllTagsController,
    getByIdTagsController,
    updateTagsController,
} from '../controllers/index.js'
import { authGuard, validateSchema } from '../middleware/index.js'
import { tagSchema } from '../validations/index.js'

export const tagsRouter = new Hono()

tagsRouter.get('/all', authGuard, getAllTagsController)
tagsRouter.get('/:id', authGuard, getByIdTagsController)
tagsRouter.post(
    '/create',
    authGuard,
    validateSchema(tagSchema),
    createTagsController,
)
tagsRouter.put('/update/:id', authGuard, updateTagsController)
tagsRouter.delete('/delete/:id', authGuard, deleteTagsController)
