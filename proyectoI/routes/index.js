var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', mainController.index); 
router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.get('/product', mainController.product);  


module.exports = router;
