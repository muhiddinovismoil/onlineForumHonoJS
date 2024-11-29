import Joi from 'joi'

export const categorySchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    created_at: Joi.date().default(() => new Date()), 
    updated_at: Joi.date().default(() => new Date()), 
    deleted_at: Joi.date().required(),
})
