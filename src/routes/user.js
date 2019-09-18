const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/user')
const Auth = require('../helpers/auth')

Route

    .get('/:id', Auth.authInfo, Auth.accesstoken, Controller.getUser)

    .post('/register', Controller.register)

    .post('/login', Controller.login)


module.exports = Route;