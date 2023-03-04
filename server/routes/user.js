const userRoutes = require("express").Router();
const { UserController } = require("../controllers");

userRoutes.post("/register", UserController.registerUser);
userRoutes.post("/login", UserController.userLogin);

module.exports = userRoutes;
