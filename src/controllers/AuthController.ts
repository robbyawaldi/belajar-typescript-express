import { Request, Response } from 'express'
const db = require('../db/models')

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        const { username, password } = req.body
        const createUser = await db.user.create({ username, password })
        return res.send(createUser)
    }

    login(req: Request, res: Response): Response {
        return res.send("")
    }
}

export default new AuthController()