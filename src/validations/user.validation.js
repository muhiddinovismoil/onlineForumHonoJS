import Joi from 'joi'
export const usersScheme = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    deleted_at: Joi.date().timestamp('unix').allow(null),
})
