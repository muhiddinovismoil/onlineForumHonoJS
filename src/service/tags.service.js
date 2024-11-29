import connectDB from '../database/db.js'

export const getAllTagsService = async () => {
    try {
        const result = await connectDB.select('*').from('tags')
        if (!result) {
            throw new Error('Error...')
        }
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const getByIdTagsService = async (id) => {
    try {
        const result = await connectDB
            .select('*')
            .from('tags')
            .where('tag_id', id)
        if (!result[0]) {
            throw new Error('Error...')
        }
        return result[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const createTagsService = async (data) => {
    try {
        const result = await connectDB('tags').insert(data).returning('*')
        if (!result[0]) {
            throw new Error('Error...')
        }
        return result[0]
    } catch (error) {
        throw new Error(error.message)
    }
}

export const updateTagsService = async (id, data) => {
    try {
        const result = await connectDB('tags')
            .where('tag_id', id)
            .update({ name: data.name })
            .returning('*')

        if (!result[0]) {
            throw new Error(`ID ${id} not found`)
        }
        return result[0]
    } catch (error) {
        throw new Error('erroer', error.message)
    }
}

export const deleteTagsService = async (id) => {
    try {
        const result = await connectDB('tags')
            .where('tag_id', id)
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
