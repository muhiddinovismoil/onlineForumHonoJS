import {
    createTagsService,
    deleteTagsService,
    getAllTagsService,
    getByIdTagsService,
    updateTagsService,
} from '../service/tags.service.js'
import { logger } from '../utils/logger.js'
export const getAllTagsController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/tags/all METHOD:GET')
        const currentTags = await getAllTagsService()
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/tags/all METHOD:GET')
        throw new Error(error)
    }
}

export const getByIdTagsController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/tags/:id METHOD:GET')
        const currentTags = await getByIdTagsService(await ctx.req.param('id'))
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/tags/:id METHOD:GET')
        throw new Error(error)
    }
}

export const createTagsController = async (ctx) => {
    try {
        logger.info(`Routes: /api/v1/posts/create METHOD: POST`)
        const currentTags = await createTagsService(await ctx.req.json())
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({
            msg: 'Post Created',
            data: currentTags,
        })
    } catch (error) {
        logger.error('Router, /api/v1/tags/create METHOD:POST')
        return ctx.json(error.message)
    }
}

export const updateTagsController = async (ctx) => {
    try {
        const id = await ctx.req.param('id')
        const body = await ctx.req.json('name')
        logger.info('Router, /api/v1/tags/update/:id METHOD:PUT')
        const currentTags = await updateTagsService(id, { name: body.name })
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/tags/update/:id METHOD:PUT')
        throw new Error(error)
    }
}

export const deleteTagsController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/tags/all METHOD:DELETE')
        const currentTags = await deleteTagsService(await ctx.req.param('id'))
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/tags/all METHOD:DELETE')
        throw new Error(error)
    }
}
