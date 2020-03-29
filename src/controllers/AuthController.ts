import { Request, Response } from 'express'
import Authentication from '../utils/Authentication'
const db = require('../db/models')

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body
        const hashedPassword: string = await Authentication.passwordHash(password)
        const createUser = await db.user.create({ username, password: hashedPassword })
        return res.send(createUser)
    }

    login = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body
        const user = await db.user.findOne({
            where: { username }
        })

        const compare = await Authentication.passwordCompare(password, user.password)

        if (compare) {
            const token = Authentication.generateToken(user.id, username, user.password)
            return res.send({ token })
        }

        return res.status(403).send("auth failed")
    }
}

export default new AuthController()