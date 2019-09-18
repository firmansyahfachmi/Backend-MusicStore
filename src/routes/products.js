const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/products')

Route

    .get('/:category', Controller.getProducts)
    .get('/detail/:name', Controller.getProductsDetail)
    .get('/', Controller.getProductsTable)
    .get('/search/:name', Controller.getProductsBy)

    .post('/', Controller.addProducts)

    .patch('/:id', Controller.updateProducts)

    .delete('/:id', Controller.deleteProducts)


module.exports = Route;