const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/transaction')

Route

    .get('/:uid', Controller.getTransaction)

    .post('/:uid', Controller.addTransaction)


module.exports = Route;