var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.index); 
router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.get('/search-results', mainController.searchResults);
router.get('/detail/:id', mainController.show);

module.exports = router;