var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', productController.product);
router.get('/add', productController.productAdd);
router.get('/edit', productController.productEdit);

module.exports = router;