const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//.use handle all GET POST and other requests
//we can replace the use with get since only get is required here
// router.use('/', (req, res, next) => {
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //NOTE : no '/' in ..
    //path.join detects the OS(Win/Linux) and provides the path accordingly
    // WIN:\user\products      LINUX:/user/products
});

module.exports = router;