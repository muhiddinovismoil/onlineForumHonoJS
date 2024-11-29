import connectDB from '../database/db.js'

export const getAllCommentsService = async () => {
    try {
        const result = await connectDB.select('*').from('comments')
        if (!result) {
            throw new Error('Error...')
        }
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const getByIdCommentsService = async (id) => {
    try {
        const result = await connectDB
            .select('*')
            .from('comments')
            .where('comments_id', id)
        if (!result[0]) {
            throw new Error('Error...')
        }
        return result[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const createCommentsService = async (data) => {
    try {
        const result = await connectDB('comments').insert(data).returning('*')
        if (!result[0]) {
            throw new Error('Error...')
        }
        return result[0]
    } catch (error) {
        throw new Error(error.message)
    }
}

export const updateCommentsService = async (id, data) => {
    try {
        const result = await connectDB('comments')
            .where('comments_id', id)
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

export const deleteCommentsService = async (id) => {
    try {
        const result = await connectDB('comments')
            .where('comments_id', id)
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
