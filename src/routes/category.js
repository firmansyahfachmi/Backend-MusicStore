const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/category')

Route

    .get('/', Controller.getCategory)

    .post('/', Controller.addCategory)

module.exports = Route;