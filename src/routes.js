const express = require('express');
const UserController = require('./controller/UserController')

const routes = express.Router();

routes.post('/user', UserController.createUser);

module.exports = routes;