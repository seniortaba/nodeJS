const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorRoute = require('./routes/404');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join('public')));

app.use('/admin/', adminRoutes);

app.use(shopRoutes);

app.use(errorRoute);


app.listen(3000)