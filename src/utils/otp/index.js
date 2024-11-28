import { generate } from 'otp-generator'
export const generateOtp = () => {
    return generate(6, {
        upperCaseAlphabets: true,
        lowerCaseAlphabets: false,
        specialChars: false,
        digits: true,
    })
}
