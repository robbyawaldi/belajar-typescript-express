"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = [
    { id: 1, name: "Robby" },
    { id: 2, name: "Nadia" },
    { id: 3, name: "Aldi" },
];
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        return res.send(data);
    };
    UserController.prototype.create = function (req, res) {
        data.push({
            id: data[data.length - 1].id + 1,
            name: req.body.name
        });
        return res.send("User berhasil ditambahkan");
    };
    UserController.prototype.show = function (req, res) {
        var user = data.find(function (user) { return user.id == req.params.id; });
        return res.send(user);
    };
    UserController.prototype.update = function (req, res) {
        var user = data.find(function (user) { return user.id == req.params.id; });
        user.name = req.body.name;
        return res.send("User berhasil diubah");
    };
    UserController.prototype.delete = function (req, res) {
        var userIndex = data.findIndex(function (user) { return user.id == req.params.id; });
        data.splice(userIndex, 1);
        return res.send("User berhasil dihapus");
    };
    return UserController;
}());
exports.default = new UserController();
