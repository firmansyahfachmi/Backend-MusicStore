const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/user')

Route

    .get('/:id', Controller.getUser)


module.exports = Route;