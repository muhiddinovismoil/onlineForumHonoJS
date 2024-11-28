import { hash, compare, genSalt } from 'bcrypt'
const generateSalt = async () => await genSalt(10)

export const hashPassword = async (password) => {
    return hash(password, await generateSalt)
}
export const comparePassword = async (userPassword, password) => {
    return await compare(userPassword, password)
}
