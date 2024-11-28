import connectDB from '../database/db.js'
import { logger } from '../utils/index.js'
export const getAllPosts = async () => {
    try {
        const data = await connectDB.select('*').from('posts')
        if (data.length == 0) {
            throw new Error(`Posts not found`)
        }
        return data
    } catch (error) {
        logger.error(error.message)
        throw new Error(error.message)
    }
}
export const getPostById = async (id) => {
    try {
        const data = await connectDB
            .select('*')
            .from('posts')
            .where('post_id', id)
        if (!data[0]) {
            throw new Error('Post not found')
        }
        return data[0]
    } catch (error) {
        logger.error(error.message)
        throw new Error(error.message)
    }
}
export const createPost = async (post) => {
    try {
        const data = await connectDB('posts')
            .insert({ ...post })
            .returning('*')
        if (!data[0]) {
            throw new Error('Post not created with some reasons')
        }
        return data[0]
    } catch (error) {
        logger.error(error.message)
        throw new Error(error.message)
    }
}
export const updatePost = async (id, post) => {
    try {
        const data = await connectDB('posts')
            .where('post_id', id)
            .update({ title: post.title, body: post.body })
            .returning('*')
        if (!data[0]) {
            throw new Error('Post not updated with some reason')
        }
        return data[0]
    } catch (error) {
        logger.error(error.message)
        throw new Error(error.message)
    }
}
export const deletePost = async (id) => {
    try {
        const data = await connectDB('posts')
            .where('post_id', id)
            .del()
            .returning('*')
        if (!data[0]) {
            throw new Error('Post not deleted with some reason')
        }
        return data[0]
    } catch (error) {
        logger.error(error.message)
        throw new Error(error.message)
    }
}
