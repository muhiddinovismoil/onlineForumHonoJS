import {
    createCategoriesService,
    deleteCategoriesService,
    getAllCategoriesService,
    getByIdCategoriesService,
    updateCategoriesService,
} from '../service/index.js'
import { logger } from '../utils/logger.js'
export const getAllCategoriesController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/categories/all METHOD:GET')
        const currentTags = await getAllCategoriesService()
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/categories/all METHOD:GET')
        throw new Error(error)
    }
}

export const getByIdCategoriesController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/categories/:id METHOD:GET')
        const currentTags = await getByIdCategoriesService(
            await ctx.req.param('id'),
        )
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/categories/:id METHOD:GET')
        throw new Error(error)
    }
}

export const createCategoriesController = async (ctx) => {
    try {
        logger.info(`Routes: /api/v1/posts/create METHOD: POST`)
        const currentTags = await createCategoriesService(await ctx.req.json())
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({
            msg: 'Post Created',
            data: currentTags,
        })
    } catch (error) {
        logger.error('Router, /api/v1/categories/create METHOD:POST')
        return ctx.json(error.message)
    }
}

export const updateCategoriesController = async (ctx) => {
    try {
        const id = await ctx.req.param('id')
        const body = await ctx.req.json('name')
        logger.info('Router, /api/v1/categories/update/:id METHOD:PUT')
        const currentTags = await updateCategoriesService(id, {
            name: body.name,
        })
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/categories/update/:id METHOD:PUT')
        throw new Error(error)
    }
}

export const deleteCategoriesController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/categories/all METHOD:DELETE')
        const currentTags = await deleteCategoriesService(
            await ctx.req.param('id'),
        )
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/categories/all METHOD:DELETE')
        throw new Error(error)
    }
}
