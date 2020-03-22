"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseRoutes_1 = __importDefault(require("./BaseRoutes"));
// Controller
var UserController_1 = __importDefault(require("../controllers/UserController"));
// Middleware
var AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
var UserRoutes = /** @class */ (function (_super) {
    __extends(UserRoutes, _super);
    function UserRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRoutes.prototype.routes = function () {
        this.router.get("/", AuthMiddleware_1.auth, UserController_1.default.index);
        this.router.post("/", UserController_1.default.create);
        this.router.get("/:id", UserController_1.default.show);
        this.router.put("/:id", UserController_1.default.update);
        this.router.delete("/:id", UserController_1.default.delete);
    };
    return UserRoutes;
}(BaseRoutes_1.default));
exports.default = new UserRoutes().router;
