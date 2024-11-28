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
        const result = await connectDB.select('*').from('tags').where('id', id)
        if (!result) {
            throw new Error('Error...')
        }
        return result[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const createTagsService = async (data) => {
    try {
        const result = await connectDB('tags')
            .insert({
                name: data.name,
            })
            .returning('*')
        if (!result) {
            throw new Error('Error...')
        }
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const updateTagsService = async (id, data) => {
    try {
        const result = await connectDB('tags')
            .where('id', id)
            .update(data.name)
            .returning('*')
        if (!result) {
            throw new Error('Error...')
        }
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteTagsService = async (id) => {
    try {
        const result = await connectDB('tags')
            .where('id', id)
            .del()
            .returning('*')
        if (!result) {
            throw new Error('Error...')
        }
    } catch (error) {
        throw new Error(error)
    }
}
