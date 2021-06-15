var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController')

router.get('/id/:id', profileController.show);


module.exports = router;