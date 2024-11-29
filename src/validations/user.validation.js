import { Joi } from 'joi'
export const usersScheme = Joi.object({
    username: Joi.string().required().unique(),
    email: Joi.string().email().required().unique(),
    password: Joi.string().required(),
    deleted_at: Joi.date().timestamp('unix').allow(null),
})
