"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
// Routers
var UserRoutes_1 = __importDefault(require("./router/UserRoutes"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.plugins();
        this.routes();
    }
    App.prototype.plugins = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(morgan_1.default("dev"));
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
    };
    App.prototype.routes = function () {
        this.app.route("/").get(function (req, res) {
            res.send("Hello Typescript express");
        });
        this.app.use("/api/v1/users", UserRoutes_1.default);
    };
    return App;
}());
var port = 8000;
var app = new App().app;
app.listen(port);
