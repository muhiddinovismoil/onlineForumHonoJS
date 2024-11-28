import connectDB from '../database/db.js'
import {
    comparePassword,
    generateOtp,
    generateToken,
    hashPassword,
    logger,
    sendMail,
} from '../utils/index.js'
export const getProfileByEmail = async (email) => {
    try {
        const data = await connectDB('users')
            .select('*')
            .where('email', email)
            .first()
        return data
    } catch (error) {
        logger.error(error.message)
        throw new Error(error.message)
    }
}

export const registerUser = async (body) => {
    try {
        const containUser = await getProfileByEmail(body.email)
        if (containUser) {
            throw new Error('User email is already in use')
        }
        const otp = generateOtp()
        try {
            await sendMail(
                body.email,
                'OTP',
                `<h1>This is your OTP code: ${otp}. Don't share it with others!</h1>`,
            )
        } catch (mailError) {
            throw new Error(`Failed to send OTP to email: ${mailError.message}`)
        }
        const hashedPassword = await hashPassword(body.password)
        const [newUser] = await connectDB('users')
            .insert({
                username: body.username,
                email: body.email,
                password: hashedPassword,
                deleted_at: body.deleted_at || null,
            })
            .returning('*')
        await connectDB('otp_codes').insert({
            user_id: newUser.user_id,
            otp_code: otp,
        })
        return newUser
    } catch (error) {
        logger.error(error.message)
        throw error
    }
}
export const loginUser = async (user) => {
    try {
        const currentUser = await getProfileByEmail(user.email)
        if (!currentUser) {
            throw new Error('User not found')
        }
        const passIsEqual = await comparePassword(
            user.password,
            currentUser.password,
        )
        if (!passIsEqual) {
            throw new Error('User password or email wrong')
        }
        const accessToken = await generateToken('access', {
            sub: currentUser.id,
            username: currentUser.username,
            email: currentUser.email,
        })
        const refreshToken = await generateToken('refresh', {
            sub: currentUser.id,
            email: currentUser.email,
        })
        return {
            accessToken,
            refreshToken,
        }
    } catch (error) {
        logger.error(error.message)
        return error.message
    }
}
