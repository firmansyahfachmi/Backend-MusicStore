const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/cart')
const Auth = require('../helpers/auth')

Route

    .get('/:id', Auth.authInfo, Auth.accesstoken, Controller.getCart)

    .post('/:id', Auth.authInfo, Auth.accesstoken, Controller.addCart)

    .delete('/:uid/:id', Auth.authInfo, Auth.accesstoken, Controller.deleteCart)

module.exports = Route;