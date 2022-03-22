const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

    //get / admin/add-products
    router.get('/add-product', (req, res, next) => {
        res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    });

    //post /admin/add-products
    router.post('/add-product',(req, res, next) => {
        console.log(req.body);
        res.redirect('/');
    });

module.exports = router;