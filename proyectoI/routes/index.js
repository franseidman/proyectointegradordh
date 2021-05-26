var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.index); 
router.get('/register', mainController.register);
router.get('/login', mainController.login);
//router.get('/search-results', mainController.searchResults);
router.get('/detail/:id', mainController.show);
router.get('/search-results', mainController.search);
//router.get('/create', mainController.create);
//router.post('/store',mainController.store);

module.exports = router;