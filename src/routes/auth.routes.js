import { Hono } from 'hono'
import {
    registerUserCon,
    loginUserCon,
    getProfileByEmailCon,
} from '../controllers/index.js'
export const authRouter = new Hono()
authRouter.post('/register', registerUserCon)
authRouter.post('/login', loginUserCon)
authRouter.get('/profile/:email', getProfileByEmailCon)
