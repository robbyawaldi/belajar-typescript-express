import BaseRoutes from './BaseRoutes'

// Controller
import AuthController from '../controllers/AuthController'

class AuthRoutes extends BaseRoutes {
    routes(): void {
        this.router.post("/register", AuthController.index)
        this.router.post("/login", AuthController.create)
    }
}

export default new AuthRoutes().router