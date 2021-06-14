var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController')

router.get('/id/:id', profileController.show);
router.get('/edit', profileController.profileEdit);

module.exports = router;