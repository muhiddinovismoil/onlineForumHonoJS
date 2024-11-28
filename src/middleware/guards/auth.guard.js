import { verifyToken } from '../../utils/index.js'
export const authGuard = async (ctx, next) => {
    try {
        const token = ctx.req.header('Authorization')
        if (!token || !token.startsWith('Bearer ')) {
            throw new Error('Token or auth type not valid')
        }
        const accessToken = token.split(' ')[1]
        const payload = await verifyToken('access', accessToken)
        if (!payload.success) {
            throw new Error('Token is expired or invalid')
        }
        ctx.user = payload
        await next()
    } catch (e) {
        return ctx.json({ error: e.message }, 401)
    }
}
