import { Joi } from 'joi'
export const postsScheme = Joi.object({
    user_id: Joi.number().required(),
    title: Joi.string().required(),
    body: Joi.string().required(),
    category_id: Joi.number().required(),
    deleted_at: Joi.date().timestamp('unix').allow(null),
})
