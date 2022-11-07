const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//we can use multiple folders like this

//This will consider the routes in admin.js files (order matter here[where it is put])
//all routes with '/admin' at beggining will go through this
//eg: '/admin/add-product'
// app.use('/admin', adminData);

// adminData represents all the data(exports) coming from adminData.js 
app.use('/admin', adminData.routes);
app.use(shopRoutes);

//no route mentioned means to '/' and it will handle any requests coming from '/****' if it is not caught by the above routes
app.use((req, res, next) => {
    // res.status(404).sendFile('404', { pageTitle: ' Page Not Found' });

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    // we can use (__dirname, 'views', '404.html')); instead
});

app.listen(3000);
