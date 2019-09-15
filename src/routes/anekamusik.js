const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/anekamusik')

Route
    .get('/', Controller.getHome)
    .get('/branch', Controller.getBranch)
    .get('/products/:category', Controller.getProducts)
    .get('/products/detail/:name', Controller.getProductsDetail)
    .get('/productsTable', Controller.getProductsTable)
    .get('/products/search/:name', Controller.getProductsBy)
    .get('/cart/:id', Controller.getCart)
    .get('/wishlist/:id', Controller.getWishlist)
    .get('/user/:id', Controller.getUser)

    .post('/', Controller.addCategory)
    .post('/cart/:id', Controller.addCart)
    .post('/wishlist/:id', Controller.addWishlist)
    .post('/products', Controller.addProducts)

    .patch('/products/:id', Controller.updateProducts)

    .delete('/products/:id', Controller.deleteProducts)
    .delete('/cart/:uid/:id', Controller.deleteCart)
    .delete('/wishlist/:uid/:id', Controller.deleteWishlist)

module.exports = Route;