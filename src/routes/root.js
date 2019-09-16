const express = require('express');
const Route = express.Router();

const wishlist = require('./wishlist')
const cart = require('./cart')
const user = require('./user')
const category = require('./category')
const branch = require('./branch')
const products = require('./products')

Route.use('/wishlist', wishlist)
Route.use('/cart', cart)
Route.use('/user', user)
Route.use('/category', category)
Route.use('/branch', branch)
Route.use('/products', products)

module.exports = Route