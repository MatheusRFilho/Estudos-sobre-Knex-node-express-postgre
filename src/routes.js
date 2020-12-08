const express = require('express')
const routes = express()

const UserController = require('./controllers/user/UserController')

routes.get('/users', UserController.index)

module.exports = routes