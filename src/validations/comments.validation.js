import Joi from "joi"

export const commentSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    post_id: Joi.number().integer().required(),
    title: Joi.string().min(3).max(255).required(),
    body: Joi.string().min(10).required(),
    created_at: Joi.date().default(() => new Date()),
    updated_at: Joi.date().default(() => new Date()),
    deleted_at: Joi.date().required()
})
