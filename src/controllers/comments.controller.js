import {
    createCommentsService,
    deleteCommentsService,
    getAllCommentsService,
    getByIdCommentsService,
    updateCommentsService,
} from '../service/index.js'
import { logger } from '../utils/logger.js'
export const getAllCommentsController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/comment/all METHOD:GET')
        const currentTags = await getAllCommentsService()

        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/comment/all METHOD:GET')
        throw new Error(error)
    }
}

export const getByIdCommentsController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/comment/:id METHOD:GET')
        const currentTags = await getByIdCommentsService(
            await ctx.req.param('id'),
        )
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/comment/:id METHOD:GET')
        throw new Error(error)
    }
}

export const createCommentsController = async (ctx) => {
    try {
        logger.info(`Routes: /api/v1/posts/create METHOD: POST`)
        const currentTags = await createCommentsService(await ctx.req.json())
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({
            msg: 'Post Created',
            data: currentTags,
        })
    } catch (error) {
        logger.error('Router, /api/v1/comment/create METHOD:POST')
        return ctx.json(error.message)
    }
}

export const updateCommentsController = async (ctx) => {
    try {
        const id = await ctx.req.param('id')
        const body = await ctx.req.json()
        logger.info('Router, /api/v1/comment/update/:id METHOD:PUT')
        const currentTags = await updateCommentsService(id, body)
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/comment/update/:id METHOD:PUT')
        throw new Error(error)
    }
}

export const deleteCommentsController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/comment/all METHOD:DELETE')
        const currentTags = await deleteCommentsService(
            await ctx.req.param('id'),
        )
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/comment/all METHOD:DELETE')
        throw new Error(error)
    }
}
