
import { createPostTagsService, deletePostTagsService, getAllPostTagsService, getByIdPostTagsService } from '../service/post.tages.service.js'
import { logger } from '../utils/logger.js'
export const getAllPostTagsController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/tags/all METHOD:GET')
        const currentTags = await getAllPostTagsService()
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/tags/all METHOD:GET')
        throw new Error(error)
    }
}

export const getByIdPostTagsController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/tags/:id METHOD:GET')
        const currentTags = await getByIdPostTagsService(await ctx.req.param('id'))
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/tags/:id METHOD:GET')
        throw new Error(error)
    }
}

export const createPostTagsController = async (ctx) => {
    try {
        logger.info(`Routes: /api/v1/posts/create METHOD: POST`)
        const currentTags = await createPostTagsService(await ctx.req.json())
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

export const deletePostTagsController = async (ctx) => {
    try {
        logger.info('Router, /api/v1/tags/all METHOD:DELETE')
        const currentTags = await deletePostTagsService(await ctx.req.param('id'))
        if (!currentTags) {
            return ctx.json({ msg: 'Malumot topilmadi...' }, 404)
        }
        return ctx.json({ data: currentTags }, 201)
    } catch (error) {
        logger.error('Router, /api/v1/tags/all METHOD:DELETE')
        throw new Error(error)
    }
}
