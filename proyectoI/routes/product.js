var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.product);
router.get('/add', productController.productAdd);
router.get('/edit', productController.productEdit);
router.get('/create', productController.create);
router.post('/store', productController.store);
router.post('/delete/:id', productController.destroy);


module.exports = router;