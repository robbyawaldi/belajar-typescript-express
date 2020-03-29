import BaseRoutes from './BaseRoutes'

// Controller
import AuthController from '../controllers/AuthController'

// Middleware
import validate from '../middlewares/AuthValidator'

class AuthRoutes extends BaseRoutes {
    routes(): void {
        this.router.post("/register", validate, AuthController.register)
        this.router.post("/login", validate, AuthController.login)
    }
}

export default new AuthRoutes().router