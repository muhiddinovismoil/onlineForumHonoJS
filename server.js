import { Hono } from 'hono'
import { boot } from './src/config/index.js'
import { serve } from '@hono/node-server'
import { authRouter } from './src/routes/index.js'
import { logger } from './src/utils/index.js'
import { createTables } from './src/database/index.js'
const app = new Hono()
app.route('/api/v1/auth', authRouter)
app.get('/api/v1/setup', async (ctx) => {
    try {
        await createTables()
        return ctx.json(
            {
                msg: 'Tables Created',
            },
            200,
        )
    } catch (error) {
        logger.error(`Error ON CREATING TABLES: ${error.message}`)
    }
})
logger.info(`Server is running on port: ${boot.port}`)
serve({ fetch: app.fetch, port: boot.port })
