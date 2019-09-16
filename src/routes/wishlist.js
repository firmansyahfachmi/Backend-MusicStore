const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/wishlist')

Route

    .get('/:id', Controller.getWishlist)

    .post('/:id', Controller.addWishlist)

    .delete('/:uid/:id', Controller.deleteWishlist)

module.exports = Route;