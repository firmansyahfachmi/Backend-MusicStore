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
    .get('/cart', Controller.getCart)
    .get('/wishlist', Controller.getWishlist)

    .post('/', Controller.addCategory)
    .post('/cart', Controller.addCart)
    .post('/wishlist', Controller.addWishlist)
    .post('/products', Controller.addProducts)

    .patch('/products/:id', Controller.updateProducts)

    .delete('/products/:id', Controller.deleteProducts)
    .delete('/cart/:id', Controller.deleteCart)
    .delete('/wishlist/:id', Controller.deleteWishlist)

module.exports = Route;