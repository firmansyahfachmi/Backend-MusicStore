const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/cart')

Route

    .get('/:id', Controller.getCart)

    .post('/:id', Controller.addCart)

    .delete('/:uid/:id', Controller.deleteCart)

module.exports = Route;