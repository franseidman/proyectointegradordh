var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.get('/search-results', mainController.search);
router.get('/', mainController.novedades);

module.exports = router;