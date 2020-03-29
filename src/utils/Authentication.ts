import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class Authentication {
    public static passwordHash = (password: string): Promise<string> => {
        return bcrypt.hash(password, 10)
    }

    public static passwordCompare = async (text: string, encryptedText: string): Promise<boolean> => {
        return await bcrypt.compare(text, encryptedText)
    }

    public static generateToken = (id: number, username: string, password: string): string => {
        const secretKey: any = process.env.JWT_SECRET_KEY
        return jwt.sign({id, username, password}, secretKey)
    }
}

export default Authentication