import { Hono } from 'hono'
import {
    registerUserCon,
    loginUserCon,
    getProfileByEmailCon,
} from '../controllers/index.js'
import { usersScheme } from '../validations/index.js'
import { validateSchema, authGuard } from '../middleware/index.js'
export const authRouter = new Hono()
authRouter.post('/register', validateSchema(usersScheme), registerUserCon)
authRouter.post('/login', loginUserCon)
authRouter.get('/profile/:email', authGuard, getProfileByEmailCon)
