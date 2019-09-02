const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/anekamusik')

Route
    .get('/', Controller.getHome)
    .get('/branch', Controller.getBranch)
    .get('/products/:category', Controller.getProducts)
    .get('/products/detail/:name', Controller.getProductsDetail)
    .get('/products/search/:name', Controller.getProductsBy)
    .post('/', Controller.addCategory)
    .post('/products', Controller.addProducts)
    .patch('/products/:id', Controller.updateProducts)
    .delete('/products/:id', Controller.deleteProducts)

module.exports = Route;