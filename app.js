const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoute = require('./routes/404');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join('public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(errorRoute);


app.listen(3000)