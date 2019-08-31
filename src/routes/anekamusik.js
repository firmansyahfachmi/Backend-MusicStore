const express = require('express');
const Route = express.Router();

const Controller = require('../controllers/anekamusik')

Route
    .get('/', Controller.getHome)
    .get('/products', Controller.getProducts)
    .post('/', Controller.addCategory)
    .post('/products', Controller.addProducts)
    .patch('/products/:id', Controller.updateProducts)
    .delete('/products/:id', Controller.deleteProducts)

module.exports = Route;