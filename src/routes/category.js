const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/category')
const Auth = require('../helpers/auth')

Route

    .get('/', Auth.authInfo, Auth.accesstoken, Controller.getCategory)

    .post('/', Controller.addCategory)

module.exports = Route;