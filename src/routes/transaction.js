const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/transaction')
const Auth = require('../helpers/auth')

Route

    .get('/:uid', Auth.authInfo, Auth.accesstoken, Controller.getTransaction)

    .post('/:uid', Auth.authInfo, Auth.accesstoken, Controller.addTransaction)


module.exports = Route;