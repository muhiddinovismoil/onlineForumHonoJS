import connectDB from '../database/db.js'

export const getAllCategoriesService = async () => {
    try {
        const result = await connectDB.select('*').from('categories')
        if (!result) {
            throw new Error('Error...')
        }
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const getByIdCategoriesService = async (id) => {
    try {
        const result = await connectDB
            .select('*')
            .from('categories')
            .where('category_id', id)
        if (!result[0]) {
            throw new Error('Error...')
        }
        return result[0]
    } catch (error) {
        throw new Error(error)
    }
}

export const createCategoriesService = async (data) => {
    try {
        const result = await connectDB('categories').insert(data).returning('*')
        if (!result[0]) {
            throw new Error('Error...')
        }
        return result[0]
    } catch (error) {
        throw new Error(error.message)
    }
}

export const updateCategoriesService = async (id, data) => {
    try {
        const result = await connectDB('categories')
            .where('category_id', id)
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

export const deleteCategoriesService = async (id) => {
    try {
        const result = await connectDB('categories')
            .where('category_id', id)
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
