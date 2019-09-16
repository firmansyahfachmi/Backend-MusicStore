const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/branch')

Route

    .get('/', Controller.getBranch)

module.exports = Route;