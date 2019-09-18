const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/wishlist')
const Auth = require('../helpers/auth')

Route

    .get('/:id', Auth.authInfo, Auth.accesstoken, Controller.getWishlist)

    .post('/:id', Auth.authInfo, Auth.accesstoken, Controller.addWishlist)

    .delete('/:uid/:id', Auth.authInfo, Auth.accesstoken, Controller.deleteWishlist)

module.exports = Route;