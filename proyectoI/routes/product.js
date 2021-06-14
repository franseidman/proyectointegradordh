var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/id/:id', productController.product);
//router.get('/add', productController.productAdd);
router.get('/edit', productController.productEdit);
router.get('/add', productController.show);
router.post('/store', productController.store);
router.post('/delete/:id', productController.destroy);


module.exports = router;