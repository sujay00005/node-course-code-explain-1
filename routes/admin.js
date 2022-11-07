const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

//The Router() is like a mini-express app tied to other main express app
const router = express.Router();

const products = [];

// '/admin/add-product'
router.get('/add-product', (req, res, next) => {
    //since '/admin' is sending the requests to this page so "admin/product" in action
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));

});


// '/admin/add-product' =>POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/')
});

exports.routes = router;
exports.products = products;