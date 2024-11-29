import { Hono } from 'hono'
import {
    createTagsController,
    deleteTagsController,
    getAllTagsController,
    getByIdTagsController,
    updateTagsController,
} from '../controllers/index.js'

export const tagsRouter = new Hono()

tagsRouter.get('/all', getAllTagsController)
tagsRouter.get('/:id', getByIdTagsController)
tagsRouter.get('/create', createTagsController)
tagsRouter.get('/all', updateTagsController)
tagsRouter.get('/all', deleteTagsController)
