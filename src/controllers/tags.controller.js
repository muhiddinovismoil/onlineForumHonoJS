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
        const currentTags = await getByIdTagsService(ctx.req.param('id'))
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
        logger.info('Router, /api/v1/tags/create METHOD:POST')
        const currentTags = await createTagsService(ctx.req.json())
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/tags/create METHOD:POST')
        throw new Error(error)
    }
}

export const updateTagsController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/tags/update/:id METHOD:PUT')
        const currentTags = await updateTagsService(
            ctx.req.param('id'),
            ctx.req.json(),
        )
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
        const currentTags = await deleteTagsService(ctx.req.param('id'))
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/tags/all METHOD:DELETE')
        throw new Error(error)
    }
}
