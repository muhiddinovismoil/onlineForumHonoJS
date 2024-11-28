import { config } from 'dotenv'
config()
export const web = {
    access: {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
        expiresIn: process.env.JWT_ACCESS_EXPIRES,
    },
    refresh: {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
        expiresIn: process.env.JWT_REFRESH_EXPIRES,
    },
}
