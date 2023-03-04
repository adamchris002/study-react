const routes = require("express").Router();

const userRoutes = require("./user")

routes.use('/user', userRoutes);

module.exports = routes;