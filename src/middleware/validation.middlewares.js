export const validateSchema = (schema) => async (ctx, next) => {
    try {
        const { error } = schema.validate(await ctx.req.json())
        if (error) {
            return ctx.json({ error: error.details[0].message }, 400)
        }
        return await next()
    } catch (error) {
        return ctx.json({ error: error.message }, 500)
    }
}
