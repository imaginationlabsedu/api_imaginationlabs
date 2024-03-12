const { Router } = require("express");
const { postHandlerUser } = require("../handlers/User/postHandlerUser");
const { getHandlerUser } = require("../handlers/User/getHandlerUser");

const userRoutes = Router();
userRoutes.get("/", getHandlerUser);
userRoutes.post("/create", postHandlerUser);

module.exports = userRoutes;
