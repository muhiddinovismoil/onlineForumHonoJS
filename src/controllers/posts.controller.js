import {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} from '../service/index.js'
import { logger } from '../utils/index.js'
export const getAllPostsCon = async (ctx) => {
    try {
        logger.info(`Routes: /api/v1/posts/ METHOD: GET`)
        const data = await getAllPosts()
        return ctx.json({
            msg: 'All Posts',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/posts/ METHOD: GET,Error: ${error.message}`,
        )
        return ctx.json(error.message)
    }
}
export const getPostByIdCon = async (ctx) => {
    try {
        logger.info(
            `Routes: /api/v1/posts/${await ctx.req.param('id')} METHOD: GET`,
        )
        const data = await getPostById(await ctx.req.param('id'))
        return ctx.json({
            msg: 'Post',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/posts/${await ctx.req.param('id')} METHOD: GET,Error: ${error.message}`,
        )
        return ctx.json(error.message)
    }
}
export const createPostCon = async (ctx) => {
    try {
        logger.info(`Routes: /api/v1/posts/ METHOD: POST`)
        const data = await createPost(await ctx.req.json())
        return ctx.json({
            msg: 'Post Created',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/posts/ METHOD: POST,Error: ${error.message}`,
        )
        return ctx.json(error.message)
    }
}
export const updatePostCon = async (ctx) => {
    try {
        logger.info(
            `Routes: /api/v1/posts/${await ctx.req.param('id')} METHOD: PUT`,
        )
        const data = await updatePost(
            await ctx.req.param('id'),
            await ctx.req.json(),
        )
        return ctx.json({
            msg: 'Post Updated',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/posts/${await ctx.req.param('id')} METHOD: PUT,Error: ${error.message}`,
        )
        return ctx.json(error.message)
    }
}
export const deletePostCon = async (ctx) => {
    try {
        logger.info(
            `Routes: /api/v1/posts/${await ctx.req.param('id')} METHOD: DELETE`,
        )
        const data = await deletePost(await ctx.req.param('id'))
        return ctx.json({
            msg: 'Post Deleted',
            data: data,
        })
    } catch (error) {
        logger.error(
            `Routes: /api/v1/posts/${await ctx.req.param('id')} METHOD: DELETE,Error: ${error.message}`,
        )
        return ctx.json(error.message)
    }
}
