"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// get post routes
app.get("/post", (req, res) => {
    res.status(200).json({ message: "post routes" });
});
// root routes
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World" });
});
exports.default = app;
