"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const modules_1 = __importDefault(require("./src/start/modules"));
(0, modules_1.default)(app);
// get post routes
app.get("/post", (req, res) => {
    res.status(200).json({ message: "post routes" });
});
// root routes
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World" });
});
// root routes
app.get("/users", (req, res) => {
    res.status(200).json({ message: "Get all users" });
});
exports.default = app;
