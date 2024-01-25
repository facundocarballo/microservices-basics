"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1.default)();
var port = 3002;
app.use((0, cors_1.default)());
app.get("/", function (req, res) {
    res.send("Hello World from NodeJS!!");
});
app.listen(port, function () {
    console.log("El servidor de Express est\u00E1 escuchando en http://localhost:".concat(port, "/"));
});
