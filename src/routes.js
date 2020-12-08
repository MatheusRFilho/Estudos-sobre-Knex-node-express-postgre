const express = require('express')
const knex = require('./database/index');

const routes = express()

routes.get('/users', (req, res) => knex('users').then(results => res.json(results)))

module.exports = routes