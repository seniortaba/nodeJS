const express = require('express');
const path = require('path');
const router = express.Router();

const routDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
   const products = adminData.products;
   res.render('shop', {prods:products, title: 'shop'});
   res.render('shop')
})


module.exports = router;