import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import { config as dotenv } from 'dotenv'

// Routers
import UserRoutes from './router/UserRoutes'
import AuthRoutes from './router/AuthRoutes'
import TodoRoutes from './router/TodoRoutes'

class App {
    public app: Application

    constructor() {
        this.app = express()
        this.plugins()
        this.routes()
        dotenv()
    }

    protected plugins(): void {
        this.app.use(bodyParser.json())
        this.app.use(compression())
        this.app.use(helmet())
        this.app.use(cors())
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("Hello Typescript express")
        })
        this.app.use("/api/v1/users", UserRoutes)
        this.app.use("/api/v1/auth", AuthRoutes)
        this.app.use("/api/v1/todos", TodoRoutes);
    }
}

const port: number = 4000
const app = new App().app
app.listen(port)