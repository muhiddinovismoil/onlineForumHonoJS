import Joi from 'joi'

export const postTagSchema = Joi.object({
    post_id: Joi.number().integer().required(),
    created_at: Joi.date().default(() => new Date()),
})
