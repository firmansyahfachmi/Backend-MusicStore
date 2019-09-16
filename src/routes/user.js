const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/user')

Route

    .get('/:id', Controller.getUser)

    .post('/register', Controller.register)

    .post('/login', Controller.login)


module.exports = Route;