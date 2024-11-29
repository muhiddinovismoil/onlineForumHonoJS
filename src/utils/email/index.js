import { createTransport } from 'nodemailer'
import {email} from '../../config/index.js'
import { logger } from '../index.js'
const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: email.user,
        pass: email.pass,
    },
})
export const sendMail = async (to, subject, html) => {
    const info = await transporter.sendMail({
        from: email.user,
        to,
        subject,
        html,
    })
    logger.info(`Message sent to your email: ${info.messageId}`)
}
