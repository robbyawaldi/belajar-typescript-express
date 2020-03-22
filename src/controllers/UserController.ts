import { Request, Response } from 'express'
import IController from './ControllerInterface'

const data: any[] = [
    { id: 1, name: "Robby" },
    { id: 2, name: "Nadia"},
    { id: 3, name: "Aldi"},
]

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send(data)
    }

    create(req: Request, res: Response): Response {
        data.push({
            id: data[data.length - 1].id + 1,
            name: req.body.name
        })

        return res.send("User berhasil ditambahkan")
    }

    show(req: Request, res: Response): Response {
        const user = data.find(user => user.id == req.params.id)
        return res.send(user)
    }

    update(req: Request, res: Response): Response {
        const user = data.find(user => user.id == req.params.id)
        user.name = req.body.name
        return res.send("User berhasil diubah")
    }

    delete(req: Request, res: Response): Response {
        const userIndex = data.findIndex(user => user.id == req.params.id)
        data.splice(userIndex, 1)
        return res.send("User berhasil dihapus")
    }
}

export default new UserController()