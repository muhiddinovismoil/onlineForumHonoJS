import connectDB from '../database/db.js'

export const getAllPostTagsService = async () => {
    try {
        const result = await connectDB.select('*').from('post_tags')
        if (!result) {
            throw new Error('Error...')
        }
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const getByIdPostTagsService = async (id) => {
    try {
        const result = await connectDB
            .select('*')
            .from('post_tags')
            .where('post_tags_id', id)
        if (!result[0]) {
            throw new Error('Error...')
        }
        return result[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const createPostTagsService = async (data) => {
    try {
        const result = await connectDB('post_tags').insert(data).returning('*')
        if (!result[0]) {
            throw new Error('Error...')
        }
        return result[0]
    } catch (error) {
        throw new Error(error.message)
    }
}

export const deletePostTagsService = async (id) => {
    try {
        const result = await connectDB('post_tags')
            .where('post_tags_id', id)
            .del()
            .returning('*')
        if (!result[0]) {
            throw new Error('Error...')
        }
        return result[0]
    } catch (error) {
        throw new Error(error.message)
    }
}
