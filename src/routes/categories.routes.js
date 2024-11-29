import { Hono } from 'hono'

import { authGuard, validateSchema } from '../middleware/index.js'
import { categorySchema } from '../validations/index.js'
import {
    createCategoriesController,
    deleteCategoriesController,
    getAllCategoriesController,
    getByIdCategoriesController,
    updateCategoriesController,
} from '../controllers/index.js'

export const categoriesRouter = new Hono()

categoriesRouter.get('/all', authGuard, getAllCategoriesController)
categoriesRouter.get('/:id', authGuard, getByIdCategoriesController)
categoriesRouter.post(
    '/create',
    authGuard,
    validateSchema(categorySchema),
    createCategoriesController,
)
categoriesRouter.put('/update/:id', authGuard, updateCategoriesController)
categoriesRouter.delete('/delete/:id', authGuard, deleteCategoriesController)
