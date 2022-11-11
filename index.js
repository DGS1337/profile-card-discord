"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const path_1 = require("path");
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT || 3000;
app.use((0, serve_favicon_1.default)((0, path_1.join)(__dirname, 'public/favicon.ico')));
app.use('/public', express_1.default.static((0, path_1.join)(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port, () => {
    console.clear();
    console.log(`Server Started on ${port}!`);
});
