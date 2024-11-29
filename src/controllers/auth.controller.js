import { registerUser, loginUser, getProfileByEmail } from '../service/index.js'
import { logger } from '../utils/logger.js'
export const getProfileByEmailCon = async (ctx) => {
    try {
        logger.info(`Routes: /api/v1/ METHOD: GET`)
        const data = await getProfileByEmail(ctx.req.param('email'))
        if (!data) {
            return ctx.json({ msg: 'User not found' }, 404)
        }
        return ctx.json({ user: data }, 200)
    } catch (error) {
        logger.info(`Routes: /api/v1/ METHOD: GET,Error: ${error.message}`)
        return ctx.json({ error: error.message }, 500)
    }
}
export const registerUserCon = async (ctx) => {
    try {
        logger.info(`Routes: /api/v1/register METHOD: POST`)
        const data = await registerUser(await ctx.req.json())
        if (!data) {
            return ctx.json({ msg: 'Registration failed' }, 400)
        }
        return ctx.json({ msg: 'You are now registered', data: data }, 201)
    } catch (error) {
        logger.error(
            `Routes: /api/v1/register METHOD: POST, Error: ${error.message}`,
        )
        return ctx.json({ error: error.message }, 500)
    }
}

export const loginUserCon = async (ctx) => {
    try {
        logger.info(`Routes: /api/v1/login METHOD: POST`)
        const data = await loginUser(ctx.req.json())
        if (!data) {
            return ctx.json({ msg: 'You are not logged in successfully' })
        }
        return ctx.json(
            {
                msg: 'You are logged in successfully',
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
            },
            200,
        )
    } catch (error) {
        logger.info(
            `Routes: /api/v1/login METHOD: POST,Error: ${error.message}`,
        )
        return ctx.json({ error: error.message }, 500)
    }
}
